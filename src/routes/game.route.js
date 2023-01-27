const express = require('express');
const app = express.Router();


app.get("/",(req,res)=>{
    let arr =  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "]
    let num = Math.floor(Math.random()*10)
    if(num===1){
        num = Math.floor(Math.random()*10)
    }
    let word = ""
    for(let i=0;i<num;i++){
        let index = Math.floor(Math.random()*27)
        word += arr[index]
    }
    res.send(word)
})

module.exports = app