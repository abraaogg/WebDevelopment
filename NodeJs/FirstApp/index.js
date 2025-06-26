const express = require('express');
const app = express()
console.dir(app)

app.use((req, res) =>{
    console.log('We got a new request!')
    res.send('Hello, we got your request!')
})
app.listen(3000, () =>{

})