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

  return (
    <span>
      <p>Click column headers to sort by that value.</p>
      <p>Shift-click to sort by multiple columns (ex click class then
        shift-click name to sort by class, with each class sorted by name)</p>
      <p>The Balance column will sort by a balance of attack and hp. This means
      that if a character has high attack and low defense, they will be sorted
      later than a character with slightly lower attack and slightly higher defense</p>
      <div>
        <ReactTable
          data = {servants}
          filterable
          defaultFilterMethod={(filter, row, column) => {
            const id = filter.pivotId || filter.id
            return row[id] !== undefined ? String(row[id]).toLowerCase().startsWith(filter.value.toLowerCase()) : true
          }}
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
              sortMethod: (a, b) => {
                return sorter.sortClass(a, b)
              }
            },
            {
              Header: 'Rarity',
              accessor: 'rarity',
              Cell: props => ( // eslint-disable-line react/display-name
                <span>
                  {props.original.rarity}-Stars
                </span>
              )
            },
            {
              Header: 'Level',
              accessor: 'level'
            },
            {
              Header: 'Attack',
              accessor: 'atk'
            },
            {
              Header: 'HP',
              accessor: 'hp'
            },
            {
              Header: 'Bond Level',
              accessor: 'bond'
            },
            {
              Header: 'Acquisition',
              accessor: 'createdAt'
            },
            {
              Header: 'Balance',
              accessor: '_id',
              Cell: props => <span></span>, // eslint-disable-line react/display-name
              sortMethod: (a, b) => sorter.doubleSort(a, b, servants)
            }
          ]}
        />
      </div>
    </span>

  // <div>
  //   <h1>Servants</h1>
  //   {servantsJsx}
  // </div>
  )
}

export default Servants
