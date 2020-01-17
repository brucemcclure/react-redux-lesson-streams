import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const pageOne = () => {
  return <div>pageOne</div>
}

const pageTwo = () => {
  return (
    <div>
      pageTwo
      <button>Click!</button>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path='/' exact component={pageOne} />
        <Route path='/pagetwo' exact component={pageTwo} />
      </BrowserRouter>
    </div>
  )
}

export default App
