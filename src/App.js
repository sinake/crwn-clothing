import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'

import './App.css';

const HatsPage = () => {
  return(
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

const JacketsPage = () => {
  return(
    <div>
      <h1>JACKETS PAGE</h1>
    </div>
  )
}

const SneakersPage = () => {
  return(
    <div>
      <h1>Sneakers PAGE</h1>
    </div>
  )
}
const WomensPage = () => {
  return(
    <div>
      <h1>Womens PAGE</h1>
    </div>
  )
}

const MensPage = () => {
  return(
    <div>
      <h1>Mens PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route exact path='/shop/hats' component={HatsPage}></Route>
        <Route exact path='/shop/jackets' component={JacketsPage}></Route>
        <Route exact path='/shop/sneakers' component={SneakersPage}></Route>
        <Route exact path='/shop/womens' component={WomensPage}></Route>
        <Route exact path='/shop/mens' component={MensPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
