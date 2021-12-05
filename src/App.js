import React, { useState, useEffect } from 'react'
import "./App.css"
import Header from "./Header.js"


const bookname = '四畳半神話大系'
const uri = `https://www.googleapis.com/books/v1/volumes?q=intitle:${bookname}&maxResults=1`

const App = props => {
  const [data, setData] = useState([])
  useEffect(
    () =>
      window
        .fetch(uri)
        .then(res => res.json())
        .then(json => json.items)
        .then(data => setData(data)),
    []
  )



  const a = data.volumeInfo

  return (
    <>
      <Header text="書籍検索" />
      <div className="item">
        <ul>
          <div className="items">
            {data.map(v => (
              <ol key={v.volumeInfo}>作品名：   {v.volumeInfo.title}</ol>
            ))}
          </div>

          <div className="items">
            {data.map(v => (
              <ol key={v.voulumeInfo}>著者：{v.volumeInfo.authors}</ol>
            ))}
          </div>

          <div className="items2">
            <h2>あらすじ</h2>
            {data.map(v => (
              <p key={v.imageLinks}>{v.volumeInfo.description}</p>
            ))}
          </div>


        </ul>
      </div>
    </>
  )
}
export default App
