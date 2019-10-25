import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import ServantTable from './ServantTable'
import { Link } from 'react-router-dom'

const Servants = ({ user, alerts, match }) => {
  const [servants, setServants] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/servants`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(responseData => setServants(responseData.data.servants))
      .catch(console.error)
  }, [])

  return (
    <span>
      <p>Click column headers to sort by that value.</p>
      <p>Shift-click to sort by multiple columns (ex click class then
        shift-click name to sort by class, with each class sorted by name)</p>
      <p>The Balance column will sort by a balance of attack and hp. This means
      that if a character has high attack and low defense, they will be sorted
      later than a character with slightly lower attack and slightly higher defense</p>
      <p>
        <Link to='suggest'>
          Suggest Servants
        </Link>
      </p>
      <ServantTable servants={servants} suggest={false} />
    </span>

  // <div>
  //   <h1>Servants</h1>
  //   {servantsJsx}
  // </div>
  )
}

export default Servants
