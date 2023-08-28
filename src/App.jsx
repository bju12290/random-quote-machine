import { useState, useEffect } from 'react'
import './App.css'
import Quote from './components/Quote/Quote.jsx'

function App() {
  const [quoteData, setQuoteData] = useState(null)

  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => setQuoteData(data))
    .catch(error => {
        console.log('Something went wrong when getting the API Data')
    });
}, [])

  useEffect(() => {
    const body = document.body
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
    body.classList.remove(...colors)
    body.classList.add(colors[Math.floor(Math.random() * colors.length)])
  }, [quoteData])

  const fetchNewQuote = () => {
    fetch('https://cors-anywhere.herokuapp.com/https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => setQuoteData(data))
    .catch(error => {
        console.log('Something went wrong when getting the API Data')
    });
  }

if (quoteData === null) {
  return (<></>)
}
  return (
    <>
      <Quote quoteData={quoteData} fetchNewQuote={fetchNewQuote}/>
    </>
  )
}

export default App
