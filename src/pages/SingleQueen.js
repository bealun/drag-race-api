import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
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
        setQueen(json)
      })
  }, [id])

  return (
    <div>
      <Header />
      <Content key={queen.id}>
        <QueenImg src={queen.image_url} alt={queen.name} />
        <InfoAbout>
          <h1>{queen.name}</h1>
          <h4>{queen.quote}</h4>
          <p>{queen.episodes && queen.episodes.length}</p>
          <p>{queen.winner === true ? 'Winner' : ''}</p>
          <p>{queen.missCongeniality === true ? '💅 Miss Congeniality' : ''}</p>
          {queen.seasons && queen.seasons.map(season => (
            <div>
              <p>Season {season.seasonNumber}</p>
              <p>Came in {season.place} place</p>
            </div>
          ))}
        </InfoAbout>
      </Content>
    </div>
  )
}

const Content = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 30px;
`

const QueenImg = styled.img`
  width 400px;
`

const InfoAbout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`