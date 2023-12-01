import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  const [jockes,setJockes] = useState([])

  useEffect(()=>{
    axios.get('/api/jockes')
    .then((response)=>{
      setJockes(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  })

  return (
    <>
      <h2>Frontend and Backend connection</h2>
      <p>Jockes : {jockes.length}</p>
      {
        jockes.map((jockes,index)=>(
          <div key={jockes.id}>
            <h3>{jockes.title}</h3>
            <p>{jockes.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
