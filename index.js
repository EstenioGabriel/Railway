// Importando o express
const express = require("express");
const app = express();
const PORT = process.env.port || 8080;

// Primeira rota
app.get("/login", function (req,res){
    res.send("<h1>PRIMEIRA ROTA</h1> " + "<h3>Rota De Login</h3>")
})


// Resposta do status do servidor
app.listen(PORT, () => {
    console.log("SERVIDOR OLINE....");
    console.log("PORTA:",PORT);
})
