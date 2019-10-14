import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Sorter from '../../lib/sorter'
const sorter = new Sorter()
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

  // const servantsJsx = servants.map(servant => (
  //   <p key={servant._id}>
  //     <Link to={`servants/${servant._id}`}>
  //       {servant.name}
  //     </Link>
  //   </p>
  // ))

  return (
    <ReactTable
      data = {servants}
      columns={[
        {
          Header: 'Name',
          accessor: 'name',
          Cell: props => ( // eslint-disable-line react/display-name
            <Link to={`servants/${props.original._id}`}>
              {props.original.name}
            </Link>
          )
        },
        {
          Header: 'Class',
          accessor: 'sclass',
          sortMethod: (a, b) => sorter.sortClass(a, b)
        }
      ]}
    />

  // <div>
  //   <h1>Servants</h1>
  //   {servantsJsx}
  // </div>
  )
}

export default Servants
