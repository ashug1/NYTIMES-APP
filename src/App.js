import React, { useState, useEffect } from 'react';
import './App.css';

const API_KEY = '5lZZLpAwyHrTVwNcZvh7HnDBt15aCr2H';
const API_URL =
  'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=' + API_KEY;

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.results);
      });
  }, []);

  return (
    <div className="App">
      <div className="app-container">
        <h1>NY Times Most Popular Articles</h1>
        <ul className="article-list">
          {articles.map(article => (
            <li key={article.id} className="article-item">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
              <p>{article.abstract}</p>
              <p>{article.published_date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
