//this is the page where you have to go into the terminal and use command C to restart the server

let express = require('express');
let app = express ();

app.use(express.json()); //got cofused with the parsal thing and used claude to see where I went wrong

let flavorTracker =[];
// app.get('/',(req,res)=> {
//     res.send('this is the main page')
// })
//2. Add a rout of the server that is listening for post request 

app.post('/noFlavor', (req,res)=> {
    console.log(req.body);
    let currentDate = Date();
    let obj = {
        date: currentDate,
        flavor: req.body.flavor
    
    }
    flavorTracker.push(obj);
    console.log(flavorTracker);
    //always send the response back to the client
    res.json({task:"success"});
})
app.use('/', express.static('public'));
app.listen(4000, ()=> {
    console.log('listening at localhost:4000');
})

//add route to get all tracked info
app.get('/getFlavor', (req,res)=> {
    let obj = {data: flavorTracker};
    res.json(obj);
})