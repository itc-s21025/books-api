import React, { useState, useEffect } from 'react'
import "./App.css"
import Search from "./Search.js"
import Header from "./Header.js"

const App = () => {
  const [data, setData] = useState([])

  const search = searchValue => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchValue}&maxResults=1`)
      .then(response => response.json())
      .then(json => json.items)
      .then(data => setData(data));
  }








  return (
    <>
      <Header text="書籍検索" />
      <Search search={search} />
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
