// const { response } = require("express");

window.addEventListener('load',()=> {
    document.getElementById('button-flavor').addEventListener('click', ()=> {
        let noFlavor = document.getElementById('yogurt-flavor').value;
        console.log(noFlavor);

        //creating obj
        let obj = {"flavor" : noFlavor};

       let jsonData = JSON.stringify(obj); //stringing obj, taking the string and converting back as a json

//fetch to route noFlavor
       fetch('/noFlavor', {
        method: 'POST',
        headers: { //meta information
            "Content-type": "application/json"
        },
        body: jsonData
    
//we are sending this string data in the body
       })
       .then(res => res.json())
       .then(data => {console.log(data)});
    })
document.getElementById('get-tracker').addEventListener('click',()=> { 
    //get info on all the flavors entered total
fetch('/getFlavor')
.then(res=> res.json())
.then(data => {
     document.getElementById('flavor-info').innerHTML=''
    console.log(data.data);
    for(let i=0; i<data.data.length; i++) {
        let string = data.data[i].date + ":" + data.data[i].flavor;
       let elt = document.createElement('p');
       elt.innerHTML = string;
       document.getElementById('flavor-info').appendChild(elt);
    }

})
})

    //1. make fetch request of Post so that we can send no of whatever to the server
})
// when you have client code you do not have to refresh the server because it is part of the client facing code

// a post request can only be made from the js inner wepage. to post this info to the server we have to use fetch and that will send data to server 

// have to create an event listener for the post request