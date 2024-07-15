const express = require('express')
const OS = require('os')

const app = express()

app.get('/', (req,res)=> {
    console.log(OS.cpus().length)
    res.send('<a href="/about"><button>About</button></a>')
})

app.get('/about',(req,res) => {
    res.send("About Page")
})

app.listen(3000,()=>{
    console.log(`Server running on http://localhost:3000`)
})