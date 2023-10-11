const express = require("express");
const bodyParser = require("body-parser");
const widgetsRouter = require("./routes/widgetsRouter");
const connectDB = require("./config/db");
const cors = require('cors');

const app = express();
const port = 4000

connectDB();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//every request will have these two requests? on line 13 for their headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

//time to start adding routers (separate files/pages) for '/' and '/widget'
app.get('/', (req, res) => {
  console.log('method GET hit');
  res.json({
    message: 'Hello World!'
    })
})  

app.post('/', (req, res) => {
    console.log(req.body);
    res.json({
      message: 'Hello World2!'
      })
  }) 

  //everything below here will pertain to widgets! we want to separate the GETS and POSTS and not clump them together so the operations can be compiled by page ('/' and '/widgets)


app.use('/widgets', widgetsRouter);

app.listen(port, () => {
  console.log(`Example app listening/running on port ${port}`)
});
