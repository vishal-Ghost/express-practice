const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 5000;
const multer = require('multer')

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        return cb(null,'./uploads')
    },
    filename : (req,file,cb)=>{
        return cb(null,Date.now()+file.originalname)
    }
})
const uploads = multer({storage})


app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.listen(port,(req,res)=>{
    console.log(`app is listening on ${port}`)
})


const uploadRoutes = require('./Routes/UploadRoutes')
app.use('/api',uploads.single('file'),uploadRoutes)


// app.post('/api/upload',uploads.single('file'),(req,res)=>{
//     console.log(req.body)
//     console.log(req.file)
// })