const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.get("/api", (req, res) => {
    res.json(
        { text: 'Do all exercises!', id: 'g3' });
});

app.post("/api", (req, res) => {
    const data = req.body;
    //Access and process the data
    const text = data.text;
    
    // Assume there is an error before processing data
    let errorFlag = true;
    
    // Checking errors in string
    if(checkAlphaNumericValues(text) && checkMinLengthOfString(text)){
       errorFlag = false;
    }
    // Preparing the response
    res.set('Content-Type', 'application/JSON');
    if(errorFlag) {
        res.status(400).json({Message: "Invalid data"});
    }
    else{
        res.status(200).json({Message: "Valid data"});
    }
});
app.listen("5000", () => {console.log("Server listening on port 5000")});

const checkAlphaNumericValues = (text) => {
    const regex = /^[a-zA-Z0-9\s]+$/;
    return regex.test(text);
};

const checkMinLengthOfString = (text) => {
    return text.length > 2;
}