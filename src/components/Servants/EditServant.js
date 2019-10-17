import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import ServantForm from './ServantForm'

const EditServant = ({ user, match, alert, history }) => {
  const servantObject = {
    _id: '',
    name: 'Name',
    sclass: 'Class',
    rarity: 0,
    level: 0,
    atk: 0,
    hp: 0
  }
  const [servant, setServant] = useState(servantObject)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/servants/${match.params.id}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(responseData => setServant(responseData.data.servant))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setServant(servant => ({ ...servant, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      method: 'PATCH',
      url: `${apiUrl}/servants/${match.params.id}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: { servant }
    })
      .then(() => alert({ heading: 'Success', message: 'You updated a servant', variant: 'success' }))
      .then(() => history.push(`/servants/${match.params.id}`))
      .catch(() => alert({ heading: 'Error', message: 'Something went wrong. Please make sure all fields are correct.', variant: 'danger' }))
  }

  return (
    <ServantForm
      servant={servant}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default withRouter(EditServant)
