const express = require('express')
const app = express()
const {connectToDb, getDb} = require("./dbConnect")
const cors = require('cors')

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000
app.listen(PORT)
let db;
connectToDb((err) => {
    if (!err) {
        db = getDb()
        console.log(`Server is running on port ${PORT}`)
    } else {
        console.error('Fail de connecter a la base de donner')
    }
})

app.get('/', (req, res)=>{
    res.send("hello")
})

app.get('/api/data', async (req,res)=> {
    const data = await db.collection("produit").find().toArray();
    res.json(data)
})

app.post('/api/data/insertion', async (req, res) => {
    try{
        const {nom, description} = req.body;
        const collection = db.collection('produit')
        
        const result = await collection.insertOne({nom, description})
        res.status(201).json({message: 'Produit ajouter avec succes'})
    }catch(error){
        res.status(500).json({message: 'Pas envoyer avec succces', error})
    }
})
