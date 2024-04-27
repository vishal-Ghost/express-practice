const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;
const sample = require('./Models/sample')

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(port,(req,res)=>{
    console.log(`App is listening at ${port}`)
});

const userRoutes = require('./Routes/Users')
const navRoutes = require('./Routes/NavRoutes');
const subNavRoutes = require('./Routes/SubNavRoutes')
const secRoutes = require('./Routes/SectionRoutes')
const fieldRoutes = require('./Routes/FIeldRoutes')
const { json } = require('body-parser');
const db = require('./Connect');

app.use('/api',userRoutes);
app.use('/api',navRoutes);
app.use('/api',subNavRoutes);
app.use('/api',secRoutes);
app.use('/api',fieldRoutes)

app.post('/putUsers',(req,res)=>{



    const userQuery = 'INSERT INTO SAMPLE values ?'
    var values = JSON.parse(req.query.userList)

    db.query(userQuery,[values],(err,response)=>{
        err ? res.send(err) : res.send(response)
    })
})
