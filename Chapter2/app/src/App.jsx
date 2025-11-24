import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Add dependency array to prevent infinite requests

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Jokes ({jokes.length})
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px" }}>
        {
          jokes.map((joke) => (
            <div
              key={joke.id}
              style={{
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                background: "#f7f7f7",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
              }}
            >
              <h3 style={{ marginBottom: "8px", color: "#333" }}>{joke.title}</h3>
              <p style={{ margin: 0, color: "#555" }}>{joke.content}</p>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default App;
