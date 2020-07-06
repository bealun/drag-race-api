import React from 'react'
import styled from 'styled-components/macro'
import { Header } from '../components/Header'

export const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeContent>
        {/* <h1>Hello</h1> */}
      </HomeContent>
    </div>
  )
}

const HomeContent = styled.div`
  background: url('/mirrorrupaul.jpg');
  background-size: cover;
  height: 100vh;
  width: 100%;
  margin: 0;
`