import React from "react"
import PostItem from "./PostItem"

export default function PostList ({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  )
}
