import './style.css';

import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom'


function Accueil() {
//const {id} = useParams()
const navigate = useNavigate()

  const goInsertion = () => {
    navigate("/insertion")
  }

  const[produit, setProduit] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/data')
    .then(response => setProduit(response.data))
    .catch(error => console.error(error));
  }, [])

  const handledelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/data/${id}`)
      setProduit(produit.filter((item) => item._id !== id))
    }catch (error){
      console.error("Failed to delete user ", error)
    }
  }

  return(
    <div>
        <h1>Produit MongoDB</h1>
        <button onClick= {goInsertion}>Page d&apos;insertion</button>

        {produit.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {produit.map((produit) => (
              <tr key={produit._id}>
                <td>{produit.nom}</td>
                <td>{produit.description}</td>
                <td>
                 <Link to={`/modiffication/${produit._id}`}>
                   <button>Modifier</button>
                 </Link>
                </td>
                <td>
                  <button onClick={() => handledelete(produit._id)}>Supprimer</button>
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