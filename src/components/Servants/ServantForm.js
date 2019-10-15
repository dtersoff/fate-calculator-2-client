import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ServantForm = ({ servant, handleChange, handleSubmit }) => {
  const cancelPath = servant._id ? `#/servants/${servant._id}` : '#servants'

  // An object containing the key names of my servant schema, with each value
  // being the way I'd like them displayed to the user
  const keyNames = {
    name: 'Name',
    sclass: 'Class',
    rarity: 'Rarity',
    level: 'Level',
    atk: 'Attack',
    hp: 'HP'
  }
  // list of servant class names, to be used for populating the Class dropdown
  const classList = ['Saber', 'Lancer', 'Archer', 'Rider', 'Caster', 'Assassin', 'Berserker', 'Ruler', 'Avenger', 'Alter Ego', 'Moon Cancer', 'Shielder']
  const textFieldJsx = key => {
    return (
    // `key` will be passed in from formFieldsJsx which maps through an array
    // of all the key names of my `keyNames` object

    // For places where I want the value to be the same as the key used in the
    // schema, I can simply use `key`

    // For places where I want the nice capitalized display name, and in the
    // case of sclass, don't want to deal with removing the s from the
    // beginning, I use keyNames[key], which will give me the matching string
    // from the original object
      <Form.Control
        type='text'
        placeholder={keyNames[key]}
        name={key}
        onChange={handleChange}
        value={servant[key]}
        required
      />
    )
  }
  // For the `rarity` and `sclass` fields I want a dropdown rather than a text
  // field
  const dropdownFieldJsx = (key) => {
    let values = []
    if (key === 'rarity') {
      // if the key passed down is `rarity` then the values to iterate through
      // will be the rarity levels
      values = [0, 1, 2, 3, 4, 5]
    } else {
      // otherwise they will be the class names
      values = classList
    }
    return (
      <Form.Control
        as='select'
        placeholder={keyNames[key]}
        name={key}
        onChange={handleChange}
        value={servant[key]}
        required>
        {/* map through the `values` array, which will a range of 0 through 5
          for `rarity`, or a list of class names for `sclass` */}
        {values.map(e => (
          // if `servant[key]` (with `key` being either `rarity` or `sclass`)
          // matches the option being created, set it as the selected option
          <option key={e} selected={servant[key] === e}>{e}</option>
        ))}
      </Form.Control>
    )
  }

  // Takes in a key name from formFieldsJsx and determines which field to return
  const determineField = key => {
    if (key === 'sclass' || key === 'rarity') {
      // if the key is `sclass` or `rarity` then it will return the dropdown component
      return dropdownFieldJsx(key)
    } else {
      // otherwise it will return the `textFieldJsx` component
      return textFieldJsx(key)
    }
  }
  // Object.keys returns an array containing the names of all of the keys, which
  // I can then iterate through
  const formFieldsJsx = Object.keys(keyNames).map(key => (
    <Form.Group controlId={key} key={key}>
      <Form.Label>{keyNames[key]}</Form.Label>
      {determineField(key)}
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
