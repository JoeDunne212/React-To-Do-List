const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());

app.get("/api", (req, res) => {
    res.json(
        { text: 'Do all exercises!', id: 'g3' });
});

app.post("/api", (req, res) => {
    console.log(res);
    console.log(res);
   // res.set('Content-Type', 'application/JSON');
    res.status = "101";
    res.statusMessage = 'Joe Dunne message';
    res.send(JSON.stringify({message:"Received boyo!!"}));
    console.log("RECEIVED!");
});
app.listen("5000", () => {console.log("Server listening on port 5000")});
