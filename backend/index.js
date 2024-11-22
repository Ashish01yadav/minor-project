
const  express = require('express');
const app = express();
const port = 5001;
const cors = require('cors')

// app.get('/',(req,res) => {
//     res.send('hello world')
// })

// app.get('/product',(req,res) => {
//     res.send('product page')
// })

const UserRouter = require('./routers/user')
// middleware
 app.use(express.json())
 app.use(cors({
    origin: ['http://localhost:3000'],
 }))

 app.use('/user' , UserRouter)

app.listen(port,() => {
    console.log(`server is running on port ${port} `)
})


