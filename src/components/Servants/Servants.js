import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
<<<<<<< Updated upstream
import ServantTable from './ServantTable'
=======
import { Link } from 'react-router-dom'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Sorter from '../../lib/sorter'
// const sorter = new Sorter()
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      <p>The Balance column will sort by a balance of attack and hp. This means
      that if a character has high attack and low defense, they will be sorted
      later than a character with slightly lower attack and slightly higher defense</p>
      <ServantTable servants={servants} />
    </span>
=======
      <div>
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
              sortmethod: (a, b) => Sorter.sortClass
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
              Header: 'Stats',
              columns: [
                {
                  Header: 'Attack',
                  accessor: 'atk'
                },
                {
                  Header: 'HP',
                  accessor: 'hp'
                }
              ]
            },
            {
              Header: 'Bond Level',
              accessor: 'bond'
            },
            {
              Header: 'Acquisition',
              accessor: 'createdAt'
<<<<<<< Updated upstream
=======
            },
            {
              Header: 'Balance',
              id: 'balance',
              accessor: (d) => d,
              Cell: props => <span>{props.value.name}</span>, // eslint-disable-line react/display-name
              sortmethod: (a, b) => Sorter.sortClass
>>>>>>> Stashed changes
            }
          ]}
        />
      </div>
    </div>
>>>>>>> Stashed changes

  // <div>
  //   <h1>Servants</h1>
  //   {servantsJsx}
  // </div>
  )
}

export default Servants
