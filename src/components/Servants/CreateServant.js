import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import ServantForm from './ServantForm'

const CreateServant = ({ user }) => {
  const servantObject = {
    name: 'Name',
    sclass: 'Class',
    rarity: 0,
    level: 0,
    atk: 0,
    hp: 0
  }
  const [created, setCreated] = useState(null)
  const [servant, setServant] = useState(servantObject)

  const handleChange = event => {
    event.persist()
    setServant(servant => ({ ...servant, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      method: 'POST',
      url: `${apiUrl}/servants`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: { servant }
    })
      .then(responseData => setCreated(responseData.data.servant._id))
      .catch(() => alert({ heading: 'Error', message: 'Something went wrong. Please make sure all fields are correct.', variant: 'danger' }))
  }

  if (created) {
    return <Redirect to={`/servants/${created}`} />
  }

  return (
    <ServantForm
      servant={servant}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default CreateServant
