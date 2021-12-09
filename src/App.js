import React, { useState, useEffect } from 'react'
import Head from './header.js'
import Searchbooks from './Searchbooks.js'
import './App.css'

const url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:タイトル&maxResults=1'

const App = () => {
  const [titleinput, setTitleInput] = useState(true)
  const [data, setData] = useState([])

  const search = searchdata => {
    setTitleInput(true)

    fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchdata}&maxResults=1`)
      .then(res => res.json())
      .then(json => {
        setData(json.items)
        setTitleInput(false)
      })
  }

  return (
    <>
      <Head text="書籍検索" />
      <Searchbooks search={search} />
      <div class="App">
        {titleinput ? (
          <span>タイトル入力待ち.....</span>
        ) : (
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

            <div className="items3">
              {data.map(v => (
                <ol key={v.volumeInfo}>初版発行：{v.volumeInfo.publishedDate}</ol>
              ))}
            </div>

            <div className="items2">
              <h2>あらすじ</h2>
              {data.map(v => (
                <p key={v.imageLinks}>{v.volumeInfo.description}</p>
              ))}

            </div>
          </ul>
        )}
      </div>
    </>
  )
}

export default App
