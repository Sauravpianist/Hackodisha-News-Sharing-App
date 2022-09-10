import React, { Component } from 'react'
import {
  FacebookShareButton,FacebookIcon,TwitterShareButton,TwitterIcon,TelegramShareButton,TelegramIcon,WhatsappShareButton,WhatsappIcon
} from "react-share";

export default class NewsItems extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source}= this.props;
    return (
      <>
      {/* <FacebookShareButton 
        url="https://www.facebook.com/"
        quote={"hi saurav"}
        hashtag="#React"
      >
      <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
      </FacebookShareButton> */}


      {/* Card Items for the card */}
        <span class="badge text-bg-danger">{source}</span>
        <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl?imageUrl:"https://images.indianexpress.com/2022/08/sslv-2.jpg"} className="card-img-top" alt="..." />
  <div className="card-body">
    
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small class="text-muted">by {!author?"unknown":author} on {new Date (date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read more</a>

      <hr />
      {/* facebook share button */}
      <div className="socialShare">

      <FacebookShareButton 
        url={newsUrl}
        quote={"hi saurav"}
        hashtag="#sauravpianist"
      >
      <FacebookIcon size={28} logoFillColor="white" round={true}></FacebookIcon>
      </FacebookShareButton>
      

      {/* instagram share button  */}
      <TwitterShareButton 
        url={newsUrl}
        quote={"hi saurav"}
        hashtag="#React"
      >
      <TwitterIcon size={28} logoFillColor="white" round={true}></TwitterIcon>
      </TwitterShareButton>

      {/* telegram share button  */}
      <TelegramShareButton 
        url={newsUrl}
        quote={"hi saurav"}
        hashtag="#React"
      >
      <TelegramIcon size={28} logoFillColor="white" round={true}></TelegramIcon>
      </TelegramShareButton>

      <WhatsappShareButton 
        url={newsUrl}
        quote={"hi saurav"}
        hashtag="#React"
      >
      <WhatsappIcon size={28} logoFillColor="white" round={true}></WhatsappIcon>
      </WhatsappShareButton>
      </div>


  </div>
</div>
      
      </>

    )
  }
}
