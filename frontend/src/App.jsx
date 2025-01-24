import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const[produit, setProduit] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/data')
    .then(response => setProduit(response.data))
    .catch(error => console.error(error));
  }, [])


  return (
    <>
      <div>
        <h1>Produit de MongoDB</h1> 
        <ul>
          
        </ul>
      </div>
    </>
  )
}

export default App
