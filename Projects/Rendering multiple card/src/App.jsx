import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));

  }, []);

  return (

    <div className="main px-4 bg-green-500 min-h-screen">
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {posts.map((post) => (
          <Card
            key={post.id}
            userId={post.userId}
            id={post.id}
            title={post.title}
            description={post.body}
          />
        ))}
      </div>
    </div>

  );
}

export default App;