import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { WinnerList } from './pages/WinnerList'
import { AllQueens } from './pages/AllQueens'
import { SingleQueen } from './pages/SingleQueen'
import { LipsyncBattle } from './pages/LipsyncBattle'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>

        <Route path="/winners">
          <WinnerList />
        </Route>

        <Route path="/queens">
          <AllQueens />
        </Route>

        <Route path="/queens/:id">
          <SingleQueen />
        </Route>

        <Route path="/lipsyncs">
          <LipsyncBattle />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}
