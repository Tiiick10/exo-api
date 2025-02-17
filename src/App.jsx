import React, { useEffect, useState } from "react"
import PostList from "./components/PostList"
import SearchBar from "./components/SearchBar"
import "./index.css"

function App () {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data)
        setFilteredPosts(data)
        setLoading(false)
      })
  }, [])

  return (
    
    <div className="container">
      <h1>Liste des Posts</h1>
      <SearchBar posts={posts} setFilteredPosts={setFilteredPosts} />
      {loading ? <div className="loader"></div> : <PostList posts={filteredPosts} />}
    </div>
    
  )
}

export default App