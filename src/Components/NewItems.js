import React, { Component } from 'react'

const NewItems=(props)=>{
  
    let {title,decription, imageUrl,newsUrl,author,date}=props;
    return (
      <div className='my-3'>
        <div className="card" >
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{decription}...</p>
                <p className="card-text"><small className='text-muted'>By {author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>
        
      </div>
    )
  
}
export default  NewItems;