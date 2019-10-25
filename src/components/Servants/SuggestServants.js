import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import ServantTable from './ServantTable'

const SuggestServants = ({ user, alerts, match }) => {
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
      <div><h4>About</h4>
        <p>The values seen here are not the same as the values entered in when creating or editing a Servant. This is for 2 reasons
          <ol>
            <li>Certain classes actually have a hidden modifier to their attack stat, so the stat displayed in game is not the actual stat used when calculating damage.</li>
            <li>{'In order to determine which Servants are most useful for a given mission, this app will adjust the Servants\' atk and hp values in order to better reflect how strong they will be based on which classes they\'re strong or weak against, and the relative weight of those classes in the overall enemy team makeup.'}</li>
          </ol>
        </p>
        <p>Click <a href='https://gamepress.gg/grandorder/combat-mechanics'>here</a> for more details on these mechanics</p>
      </div>
      <ServantTable servants={servants} suggest={true} />
    </span>

  // <div>
  //   <h1>Servants</h1>
  //   {servantsJsx}
  // </div>
  )
}

export default SuggestServants
