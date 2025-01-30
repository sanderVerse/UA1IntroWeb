import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Modiffication() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [nom, setNom] = useState('')
    const [description, setDesription] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:3000/api/data/${id}`)
      .then(response => {
        setNom(response.data.nom)
        setDesription(response.data.description)
      })
      .catch(error => console.error(error));
    }, [id])

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:3000/api/data/${id}`, { nom, description });
            alert('Produit mis a jour!');
            navigate('/'); 
          } catch (error) {
            console.error('Error updating product:', error);
          }
    } 


    return (
        <div>
            <h1>Modiffication du produit </h1>
            <div>
                <label>Nom:</label>
                <input
                    type="text"
                    value={nom}
                    onChange={(s) => setNom(s.target.value)}
                />
            </div>

            <div>
                <label>Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(s) => setDesription(s.target.value)}
                />
            </div>
            <button onClick={handleUpdate}>Sauvegarder</button>
            <button onClick={() => navigate('/')}>Annuler</button>

        </div>
    )
}

export default Modiffication

