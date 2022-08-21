import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';

export default class NewsComponents extends Component {

    constructor(){  
        super();  
        console.log("Hello I am a constructor from News Components.")
        this.state = {
            articles: [],
            loading:false,
            page:1
        }
   }  

  async componentDidMount(){
    console.log("cmd")
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=37713cb696114e85a9d10c5014d95a37&page=1&pageSize=12"
    this.setState({loading: true});
    let data = await fetch(url); //promises
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading: false
    })
   }

   
   handlePrevClick = async()=>{
    console.log("next");
    console.log("cmd")
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=37713cb696114e85a9d10c5014d95a37&page=${this.state.page -1}&pageSize=12`
    this.setState({loading: true});
    let data = await fetch(url); //promises
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState ({
      page: this.state.page -1,
      articles: parsedData.articles,
      loading: false

    })
  }

   handleNextClick = async()=>{
    console.log("next");
    console.log("cmd")
    if(!(this.state.page +1 > Math.ceil(this.state.totalResults/12))){
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=37713cb696114e85a9d10c5014d95a37&page=${this.state.page +1}&pageSize=12`
    this.setState({loading: true});
    let data = await fetch(url); //promises
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState ({
      page: this.state.page +1,
      articles: parsedData.articles,
      loading: false

    })
  }
  }

  render() {
    console.log("render")

    
    return (
      <div className='container my-3 mx-50' style={{marginLeft: "120px"}} >

            <h1 className='text-center'>NewsChamps - Top Headlines</h1>
        {this.state.loading&&<Spinner/>}
        <div className="row">

         {!this.state.loading && this.state.articles.map((element)=>{

           return <div className="col-md-4" key={element.url}>
            <NewsItems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,60):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>

         })}

        </div>

        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button  disabled={this.state.page +1 > Math.ceil(this.state.totalResults/12)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>

    
      </div>
    )
  }
}
