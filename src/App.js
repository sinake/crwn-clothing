import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import Header from './components/header/header.component'

import './App.css';
import { auth,  createUserProfileDocument } from './firebase/firebase.utils'

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

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({
          currentUser: userAuth
        })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' component={SignInAndSignUp}></Route>
          <Route exact path='/shop/hats' component={HatsPage}></Route>
          <Route exact path='/shop/jackets' component={JacketsPage}></Route>
          <Route exact path='/shop/sneakers' component={SneakersPage}></Route>
          <Route exact path='/shop/womens' component={WomensPage}></Route>
          <Route exact path='/shop/mens' component={MensPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
