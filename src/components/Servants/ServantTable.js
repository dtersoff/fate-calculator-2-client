import React from 'react'
import Sorter from '../../lib/sorter'
import { Link } from 'react-router-dom'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const sorter = new Sorter()

const ServantTable = function ({ servants }) {
  return (
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
  )
}

export default ServantTable
