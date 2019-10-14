import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import ServantForm from './ServantForm'

const EditServant = ({ user, match, alert, history }) => {
  const [servant, setServant] = useState({ title: '', author: '' })

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
      .catch(() => alert({ heading: 'Error', message: 'Something went wrong', variant: 'danger' }))
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
