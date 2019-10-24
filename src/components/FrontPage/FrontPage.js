import React, { Fragment } from 'react'

const FrontPage = ({ user }) => {
  const startUp = (
    <div>Welcome! Please click the Sign Up button to create an account, or the Sign In button to log in.</div>
  )

  const signedIn = (
    <div>Click Servants to see a list of servants you own, or Create Servant to create a new one.</div>
  )

  const homePage = function () {
    if (user) {
      return signedIn
    } else {
      return startUp
    }
  }

  return (
    <Fragment>
      {homePage()}
    </Fragment>
  )
}

export default FrontPage
