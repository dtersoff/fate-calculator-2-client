import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

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

  const formFieldsJsx = (keys) => {
    return keys.map(key => (
      <Col key={key}>
        <Form.Group controlId={key}>
          <Form.Label>
            <img src={`${process.env.PUBLIC_URL}/images/Icon_Class_${key}.png`} title={`${classList[key]}`} width='30'></img>
          </Form.Label>
          {classFieldJsx(key)}
        </Form.Group>
      </Col>
    ))
  }
  return (
    <Form>
      {/* First row contains the 7 core classes */}
      <Form.Row>
        {formFieldsJsx(Object.keys(classList).slice(0, 7))}
      </Form.Row>
      {/* Second row contains the extra classes */}
      <Form.Row>
        <Col></Col>
        {formFieldsJsx(Object.keys(classList).slice(7))}
        <Col></Col>
      </Form.Row>
    </Form>
  )
}

export default ClassSelector
