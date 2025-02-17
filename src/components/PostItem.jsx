import React from "react"
import { Link } from "react-router-dom"

export default function PostItem  ({ post })  {
  return (
    <li>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  )
}

