import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Servants from '../Servants/Servants'
import Servant from '../Servants/Servant'
import CreateServant from '../Servants/CreateServant'
import EditServant from '../Servants/EditServant'
import FrontPage from '../FrontPage/FrontPage'
import SuggestServants from '../Servants/SuggestServants'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/' render={() => (
            <FrontPage alert={this.alert} user={user} />
          )} />
          <Route path='/home' render={() => (
            <FrontPage alert={this.alert} user={user} />
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          {/* index */}
          <AuthenticatedRoute
            user={user}
            exact path='/servants'
            render={() => (
              <Servants user={user} alert={alert} />
            )} />
          {/* suggest */}
          <AuthenticatedRoute
            user={user}
            exact path='/suggest'
            render={() => (
              <SuggestServants user={user} alert={alert} />
            )} />
          {/* show */}
          <AuthenticatedRoute
            user={user}
            exact path='/servants/:id'
            render={() => (
              <Servant user={user} alert={alert} />
            )} />
          {/* create */}
          <AuthenticatedRoute
            user={user}
            path='/create-servant'
            render={() => (
              <CreateServant user={user} alert={this.alert} />
            )} />
          {/* edit */}
          <AuthenticatedRoute
            user={user}
            path='/servants/:id/edit'
            render={() => (
              <EditServant user={user} alert={this.alert} />
            )} />
        </main>
      </Fragment>

    )
  }
}

export default App
