const express = require("express");
const widgetsRouter = express.Router(); 
const Widget = require('../models/widget');

//this stack (below) is designed to interact with all widgets. This is middleware functions (.route .get .post). http://localhost:4000/widgets

widgetsRouter.route('/') 
    .get((req, res) => {
        console.log('hello widget get method!');
        Widget.find()  //this finds everything inside the widget collection.
        .then(widgets => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(widgets);
        })
        .catch((error) => {
            res.statusCode = 500;
            res.send(error);
        })

  })
    .post((req, res) => {
        console.log('post method hit /widgets!');
        Widget.create(req.body) 
        .then((widget) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(widget)
        })
        .catch((error) => {
            res.statusCode = 503;
            res.send(error);
        })

        // res.json({
        // id: 1,
        // name: "jiggythingy",
        // material: "wood",
        // componentIds: [],
        // numComponents: 1
        // })
    })
     

//this stack (below) is designed to interact with a single specific widget (by ID in this case). This is middleware functions (.route .get .post). http://localhost:4000/widgets/4  (the 4 would come in as widgetId)

widgetsRouter.route('/:widgetId')
    .get((req, res, next) => {
        console.log('get method hit /widgets/banana!');
        res.json(req.params)
    }) 

    .put((req, res, next) => {
        const id = req.params.widgetId
    })

    //for thursday 10/  a const put widget on the front end. below the post widget function on the front end, 

module.exports = widgetsRouter;

//line 2: almost the same as the const app = express() in app.js. like a mini version. you can attach things to this router so that when it's pulled into app.js, all the other things come with it already attached.//