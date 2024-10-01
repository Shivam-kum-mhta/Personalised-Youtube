import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
//import './Home.jsx';
function App() {
  const [articles, setArticles] = useState([]);
  const [keyword, setKeyword] = useState('');

  const searchNews = async () => {
    try {
      const response = await 
      axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-09-01&sortBy=publishedAt&apiKey=0d0df4aabd5a4015bbe4fb6a69b322bb', { keyword });
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching articles', error);
    }
  };

  return (
    <div className="App">
      <h1>NewsFeedGenerator</h1>
      <div>

        <input
            type="text"
          placeholder="Enter keyword"
            value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={searchNews}>Search</button>
      </div>
      <div className="articles">
        {articles.map((article, index) => (
          <div className="card" key={index}>
            <img src={article.urlToImage} alt={article.title} />
            <h3>{article.title}</h3>

            <p>{article.description}</p>

            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
