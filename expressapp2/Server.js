const express = require('express');
const app = express();
const port = 5000;
const db = require('./models')
const cors = require('cors')
const multer = require('multer')
const fs = require('fs')
const path = require('path')

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        fs.mkdirSync(path.join(__dirname,`./uploads/${req.body.USER_NAME+'_'+req.body.DOB}`))
        return cb(null,`./uploads/${req.body.USER_NAME+'_'+req.body.DOB}`)
    },
    filename : (req,file,cb)=>{
        return cb(null,req.body.USER_NAME+'_'+req.body.DOB+'_'+file.originalname)
    }
})
const uploads = multer({storage})

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors())

db.sequelize.sync().then(()=>{
    app.listen(port,()=>{
        console.log(`App is listening on ${port}`)
    })
})



const fieldRoutes = require('./Routes/FieldRoutes')
const sectionRoutes = require('./Routes/SectionRoutes')
const navRoutes = require('./Routes/NavRoutes')
const subNavRoutes = require('./Routes/SubNavRoutes')
const userRoutes = require('./Routes/UserRoutes')
const userCreateRoutes = require('./Routes/UserCreate')

app.use('/api',fieldRoutes)
app.use('/api',sectionRoutes)
app.use('/api',navRoutes)
app.use('/api',subNavRoutes)
app.use('/api',userRoutes)
app.use('/api',uploads.single('PROFILE_PIC'),userCreateRoutes)