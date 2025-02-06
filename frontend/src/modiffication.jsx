import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom';

function Modiffication() {
    const {id} = useParams()
    const navigate = useNavigate()
   // const [produit, setProduit] = useState('')
    const [erreur, setErreur] = useState(null)
    const [nom, setProduitNom] = useState('')
    const [description, setProduitDesc] = useState('')

    useEffect(() => {
        if (!id || id.length !== 24) {
            setErreur('ID produit invalid');
            return;
        }

        axios.get(`http://localhost:3000/api/data/${id}`)
            .then(response => {setProduitNom(response.data.nom)
                            setProduitDesc(response.data.description)
            })
            .catch(() => setErreur('Erreur recuperation de produit'));
    }, [id]);

    if (erreur) return <p>{erreur}</p>;

    const handleUpdate = async (s) => {
        s.preventDefault();
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
            <h1>Modiffication du produit {nom}</h1>
            <div>
                    <input
                        type="text"
                        value={nom}
                        onChange={(s) => setProduitNom(s.target.value)}
                        placeholder="Nom du produit"
                        />
            </div>

            <div>
                <label>Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(s) => setProduitDesc(s.target.value)}
                />
            </div>
            <button onClick={handleUpdate}>Sauvegarder</button>
            <button onClick={() => navigate('/')}>Annuler</button>

        </div>
    )
}

export default Modiffication

