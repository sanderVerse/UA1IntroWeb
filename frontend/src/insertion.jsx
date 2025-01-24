import React, {useState} from "react";
import axios from 'axios'

function Insertion() {
    const [produitNom, setProduitNom] = useState
    const [produitDesc, setProduitDesc] = useState

    const envoyerData = async () => {
        try{
            const produitData = {
                nom: produitNom,
                desc: produitDesc,
            }

            const response = await axios.post('http://localhost:3000/api/data', produitData)
            console.log('Response:', response.data)
        }catch (error){
            console.log('Erreur envoyer information: ', error)
        }
    }

    return(
        <div>
            <h1>Page d'insertion</h1>
            <div>
                <label>
                    Produit nom:
                    <input
                        type="text"
                        value={produitNom}
                        onChange={(s) => setProduitNom(s.target.value)}
                        placeholder="Nom du produit"
                        />
                    </label>    
            </div>
            <div>
               <label>
                 Produit Description:
                 <input
                   type="text"
                   value={produitDesc}
                   onChange={(s) => setProduitDesc(s.target.value)}
                   placeholder="Description du produit"
                 />
               </label>
            </div>

      <button onClick={envoyerData}>Inserer</button>
        </div>
    )
}

export default Insertion