import React from 'react'
import './Quote.css'

export default function Quote(props) {
    return (
        <div className='container quote--container d-flex flex-column align-items-center' id='quote-box'>
            <h1 className='quote--text' id='text'>"{props.quoteData.content}"</h1>
            <p className='quote--author' id='author'>~{props.quoteData.author}</p>
            <button onClick={props.fetchNewQuote} className='btn btn-light new--quote' id='new-quote'>New Quote</button>
            <a id='tweet-quote' target="_blank" className="twitter--share--button"
  href={`https://twitter.com/intent/tweet?text=${props.quoteData.content}%20-%20${props.quoteData.author}`}>
<button className='m-1 btn btn-light'>Tweet This</button></a>
        </div>
    )
}