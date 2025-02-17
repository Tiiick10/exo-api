import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import "../App.css"

export default function Details () {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data)
        setLoading(false) // Fin du chargement
      })
  }, [id])

  if (loading) return <div className="loader"></div>

  return (
    <div className="container details-container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/" className="back-button">Retour</Link>
    </div>
  )
}

