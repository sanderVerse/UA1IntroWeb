import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Accueil() {
const navigate = useNavigate()

  const goInsertion = () => {
    navigate("/insertion")
  }

  const goModiffication = () => {
    navigate("./modiffication")
  }

  const[produit, setProduit] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/data')
    .then(response => setProduit(response.data))
    .catch(error => console.error(error));
  }, [])

  return(
    <div>
        <h1>Produit MongoDB</h1>
        <button onClick= {goInsertion}>Page d'insertion</button>

        {produit.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {produit.map((produit, index) => (
              <tr key={index}>
                <td>{produit.nom}</td>
                <td>{produit.description}</td>
                <td>
                  <button onClick={goModiffication}>Modiffication</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Pas de produit trouvez</p>
      )}
    </div>
  )
}
export default Accueil