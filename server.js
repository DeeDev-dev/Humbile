const express = require('express');
const app = express();

async function loadPage(URL, filename) {
    app.get(URL, (req,res) => {
        res.sendFile(`./public/${filename}.html`, { root: __dirname });
    })
}

app.listen('3000', () => {
    console.log(`http://localhost:3000/`)
})

app.get("/", (req, res) => {
    res.sendFile('./public/index.html', { root: __dirname });
})
loadPage("/auth/signin", "signin");
