import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'

export const SingleQueen = () => {
  const [queen, setQueen] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://www.nokeynoshade.party/api/queens/${id}`)
      .then(res => res.json())
      .then(json => {
        console.log(json)
      })
  })
  return (
    <div>
      <Header />
      <h1>Hey Queen!</h1>
    </div>
  )
}