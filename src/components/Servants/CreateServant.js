import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import ServantForm from './ServantForm'

const CreateServant = ({ user }) => {
  const servantObject = {
    _id: '',
    title: '',
    author: ''
  }
  const [created, setCreated] = useState(false)
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
      .catch(console.error)
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
