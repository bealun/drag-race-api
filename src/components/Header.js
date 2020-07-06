import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export const Header = () => {
  return (
    <HeaderContent>
      <RedirectLink to='/' exact
        activeStyle={{
          background: 'black',
          color: 'white'
        }}>Home</RedirectLink>
      <RedirectLink to='/winners'
        activeStyle={{
          background: 'black',
          color: 'white'
        }}>Winners</RedirectLink>
      <RedirectLink to='/queens'
        activeStyle={{
          background: 'black',
          color: 'white'
        }}>Queens</RedirectLink>
      <RedirectLink to='/lipsyncs'
        activeStyle={{
          background: 'black',
          color: 'white'
        }}>Lipsync</RedirectLink>
    </HeaderContent>
  )
}

const HeaderContent = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
`

const RedirectLink = styled(NavLink)`
  border: 1px solid black;
  border-radius: 2px;
  text-decoration: none;
  color: black;
  padding: 10px 20px;
  margin: 15px 30px;
`
