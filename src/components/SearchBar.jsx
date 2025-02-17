import React, { useState } from "react"

export default function SearchBar ({ posts, setFilteredPosts }) {
  const [query, setQuery] = useState("")

  const handleSearch = (e) => {
    setQuery(e.target.value)
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setFilteredPosts(filtered)
  }

  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Rechercher un post..."
      value={query}
      onChange={handleSearch}
    />
  )
}

