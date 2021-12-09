import React, { useState, useEffect } from 'react'
import Header from './Header.js'
import Search from './Search.js'
import './App.css'

const url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:白いしるし'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(jsonResponse => {
        setData(jsonResponse.items)

      })
  }, [])

  const search = searchValue => {
    setLoading(true)

    fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchValue}&maxResults=1`)
      .then(response => response.json())
      .then(jsonResponse => {
        setData(jsonResponse.items)
        setLoading(false)
      })
  }

  return (
    <>
      <Header text="書籍検索" />
      <Search search={search} />
      <div className="item">
        {loading ? (
          <span>loading...</span>
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
