import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { BounceLoader } from 'react-spinners'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'

export const AllQueens = () => {
  const [queens, setQueens] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch('http://www.nokeynoshade.party/api/queens/all')
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setQueens(json)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <LoadingSpinner>
      <BounceLoader color='mediumvioletred' size='80px' />
    </LoadingSpinner>
  }

  return (
    <QueenContent>
      <Header />
      {queens && queens.map(queen => (
        <LinkTo to={`/queens/${queen.id}`}
        key={queen.name}>
          <QueenTitle>{queen.name}</QueenTitle>
        </LinkTo>
      ))}
    </QueenContent>
  )
}

const LoadingSpinner = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 220px;
`

const QueenContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const LinkTo = styled(Link)`
  text-decoration: none;
  color: black;
`

const QueenTitle = styled.h1`
  border: 2px solid black;
  border-radius: 2px;
  padding: 10px 15px;
`