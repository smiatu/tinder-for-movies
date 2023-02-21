import React from 'react'
import Header from './components/Header/Header'
import CardSection from './components/CardSection/CardSection'

import './App.css'

const App: React.FunctionComponent = () => {
  return (
    <div className='App'>
      <Header/>
      <CardSection/>
    </div>
  )
}

export default App
