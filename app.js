// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos el uso de JSON
// Puerto en el que se despliega la app
const port = 3000

// HTTP methods

app.get('/v1/explorers', (req,res) => {
    console.log(`Api explorers GET ALL request ${new Date()}`)
    const explorer1 = {id:1,name:"omar1"}
    const explorer2 = {id:2,name:"omar2"}
    const explorer3 = {id:3,name:"omar3"}
    const explorer4 = {id:4,name:"omar4"}
    const explorers = [explorer1,explorer2,explorer3,explorer4]
    res.status(200).json(explorers)

})

app.post('/v1/explorers', (req,res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    const requestBody = req.body //Parámetros de un cliente
    res.status(201).json({message:"Created"})
})

app.put('/v1/explorers/:id', (req,res) => {
    console.log(`Api explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)

    const requestBody = req.body //Parámetros de un cliente
    res.status(200).json({message:"Updated!"})


})

app.delete('/v1/explorers/:id', (req,res) => {
    console.log(`Api explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)

    const requestBody = req.body //Parámetros de un cliente
    res.status(200).json({message:"Deleted!"})


})

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
