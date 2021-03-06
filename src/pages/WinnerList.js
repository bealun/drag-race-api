import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BounceLoader } from 'react-spinners'
import { Header } from '../components/Header'
import styled from 'styled-components/macro'

export const WinnerList = () => {
  const [winners, setWinners] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch('http://www.nokeynoshade.party/api/queens/winners')
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setWinners(json)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <LoadingSpinner>
      <BounceLoader color='mediumvioletred' size='80px' />
    </LoadingSpinner>
  }

  return (
    <div>
    <Header />
    <WinnerContainer>
      {winners.map(winner => (
        <WinningQueen key={winner.id}>
          <LinkTo to={`/queens/${winner.id}`}>
          <h1>{winner.name}</h1>
          {winner.seasons.map(season => (
            <div>
              <Season>Season {season.seasonNumber}</Season>
            </div>
          ))}
          </LinkTo>
        </WinningQueen>
      ))}
    </WinnerContainer>
    </div>
  )
}

const LoadingSpinner = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 220px;
`

const WinnerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 30px 0px;
`

const WinningQueen = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 10px;
  padding: 10px;
  border-radius: 3px;
  border: 5px solid #d463b0;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.11),
  0 5px 4px rgba(0, 0, 0, 0.123),
  0 8px 7px rgba(0, 0, 0, 0.144),
  0 10px 8px rgba(0, 0, 0, 0.072);
`

const LinkTo = styled(Link)`
  text-decoration: none;
  color: black;
`

const Season = styled.h4`
  margin: 5px 0px;
`

// const QueenImg = styled.img`
//   width: 400px;
//   border-radius: 3px;
// `