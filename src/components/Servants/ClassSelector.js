import React from 'react'
import Form from 'react-bootstrap/Form'

const ClassSelector = function ({ classes, handleChange }) {
  const classList = {
    saber: 'Saber',
    archer: 'Archer',
    lancer: 'Lancer',
    rider: 'Rider',
    caster: 'Caster',
    assassin: 'Assassin',
    berserker: 'Berserker',
    ruler: 'Ruler',
    avenger: 'Avenger',
    alterego: 'Alter Ego',
    mooncancer: 'Moon Cancer'
  }
  // const classesObject = {
  //   saber: 0,
  //   archer: 0,
  //   lancer: 0,
  //   rider: 0,
  //   caster: 0,
  //   assassin: 0,
  //   berserker: 0,
  //   ruler: 0,
  //   avenger: 0,
  //   alterego: 0,
  //   mooncancer: 0
  // }

  const classFieldJsx = key => {
    return (
      <Form.Control
        type='text'
        placeholder= '0'
        name={key}
        onChange={handleChange}
        value={classes[key]}
        required
      />
    )
  }

  const formFieldsJsx = Object.keys(classes).map(key => (
    <Form.Group controlId={key} key={key}>
      <Form.Label>
        <img src={`${process.env.PUBLIC_URL}/images/Icon_Class_${key}.png`} title={`${classList[key]}`} width='30'></img>
      </Form.Label>
      {classFieldJsx(key)}
    </Form.Group>
  ))

  return (
    <Form>
      <Form.Row>
        {formFieldsJsx}
      </Form.Row>
    </Form>
  )
}

export default ClassSelector
