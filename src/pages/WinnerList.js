import React, { useState, useEffect } from 'react'

export const WinnerList = () => {
  const [winners, setWinners] = useState([])

  useEffect(() => {
    fetch('http://www.nokeynoshade.party/api/queens/winners')
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setWinners(json)
      })
  }, [])
  return (
    <div>
      <h1>Hey there Winners!</h1>
      {winners.map(winner => (
        <div>
          <h1>{winner.name}</h1>
        </div>
      ))}
    </div>
  )
}