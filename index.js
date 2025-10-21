const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Primeira rota
app.get("/login", function (req,res){
    res.send("<h1>Primeira Rota</h1>")
})

// adicionar mais duas rotas

// Segunda Rota
app.get("/cadastro", function (req,res){
    res.send("<h1>Segunda Rota</h1>")
})

// Terceira Rota com parametro
app.get("/login/:qualquercoisa", function (req,res){
    res.send("<h1>Terceira Rota</h1>")
})

console.log("PORT env: ", process.env.port);

app.listen(PORT, () => {
    console.log(`Servidor Rodando Na Porta ${PORT}`);
})
