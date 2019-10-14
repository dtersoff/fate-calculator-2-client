import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ServantForm = ({ servant, handleChange, handleSubmit }) => {
  const cancelPath = servant._id ? `#/servants/${servant._id}` : '#servants'

  // An object containing the key names of my servant schema, with each value
  // being the way I'd like them displayed to the user
  const keys = {
    name: 'Name',
    sclass: 'Class',
    rarity: 'Rarity',
    level: 'Level',
    atk: 'Attack',
    hp: 'HP'
  }

  // Object.keys returns an array containing the names of all of the keys, which
  // I can then iterate through
  const formFieldsJsx = Object.keys(keys).map(key => (
    // For places where I want the value to be the same as the key used in the
    // schema, I can simply use `key`
    // For places where I want the nice capitalized display name, and in the case of
    // sclass, don't want to deal with removing the s from the beginning, I use
    // keys[key], which will give me the matching string from the original object
    <Form.Group controlId={key} key={key}>
      <Form.Label>{keys[key]}</Form.Label>
      <Form.Control
        type={key}
        placeholder={keys[key]}
        name={key}
        onChange={handleChange}
        value={servant[key]}
        required
      />
    </Form.Group>
  ))

  return (
    <Form onSubmit={handleSubmit}>
      {formFieldsJsx}
      <Button variant='primary' type='submit'>Submit</Button>
      <Button variant='secondary' href={cancelPath} className='ml2'>Cancel</Button>
    </Form>
  )
}

export default ServantForm
