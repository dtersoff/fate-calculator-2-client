import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Servants = ({ user, alerts, match, history }) => {
  const [servant, setServant] = useState(null)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/servants/${match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(responseData => setServant(responseData.data.servant))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      method: 'DELETE',
      url: `${apiUrl}/servants/${match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(() => {
        history.replace('/reload') // pass a non-existant route to erase the history
        history.replace('/servants')
      })
      // .then(() => <Redirect to={
      //   { pathname: '/servants', state: { msg: 'Servant succesfully deleted!' } }
      // } />)
      .catch(console.error)
  }

  if (!servant) {
    return <p>Loading...</p>
  } else {
    return (
      <div>
        <p>Name: {servant.name}</p>
        <p>Class: {servant.sclass}</p>
        <p>Rarity: {servant.rarity} Stars</p>
        <p>Level: {servant.level}</p>
        <p>Attack: {servant.atk}</p>
        <p>HP: {servant.hp}</p>
        <p>Bond Level: {servant.bond}</p>
        <Button href={`#/servants/${match.params.id}/edit`}>Edit</Button>
        <Button onClick={destroy} href={'#/servants'}>Delete Servant</Button>
      </div>
    )
  }
}

export default withRouter(Servants)
