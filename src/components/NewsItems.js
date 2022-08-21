import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title, description, imageUrl, newsUrl}= this.props;
    return (
      <>
        <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl?imageUrl:"https://images.indianexpress.com/2022/08/sslv-2.jpg"} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
      
      </>

    )
  }
}
