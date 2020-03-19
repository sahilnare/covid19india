
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
// const router = express.Router()

// app.get('/', (req, res) => res.send('Hello World!'))
// router.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/index.html'))
// });
app.use(express.static(path.join(__dirname + '/public/')))
// app.use(express.static(__dirname + '/public/js'))
// app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
