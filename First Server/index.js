let express = require('express'); // makes express a function
let app = express(); // this line executed a function and gave us back an object

// // app.get('/', (request, response) => {
// // response.send("Hello");
// })
let apples = {
    "data" : [
        {
            name: "fuji",
            info: "flavor profile: Usually spicy, sweet, and intense just like Chioma",
            color: "red and yellow"
        },
        {
            name: "goldendelicious",
            info: "flavor profile: They are sweet, juicy and crisp, also a nickname I would give Tyriq Whithers",
            color: "yellowish with a bit of green"
        },
        {
            name: "honeycrisp",
            info: "flavor profile: Sweet and juicy, debatably Chioma's favorite apple right behind cosmic crisp",
            color: "red with yellow stripes"
        },
        {
            name: "mcintosh",
            info: "flavor profile: tart, I don't like them 0/10",
            color: "red with flecks of yellow and green"
        },
        {
            name: "applepear",
            info: "flavor profile: crispy, juicy, sweet, and floral - technically a Japanese and Chinese native pear, but so delicious",
            color: "golden brown"
        },
        {
            name: "cosmiccrisp",
            info: "flavor profile: tangy, with some straightforward sweetness, which is Chioma on a good day",
            color: "red with little white dots and hit of yellow on the top"  
        },
        {
            name: "grannysmith",
            info: "flavor profile: tangy , sweet and juicy and perfect for pies!",
            color: "greeeeeeen!"
        },
        {
            name: "kiku",
            info: "flavor profile: Apparently the sweetest apple out of them all, I've never heard of these but with such a cute name I cant help but to seek them out to try",
            color: "red with flecks of yellow"
        },
        {
            name: "smitten",
            info: "flavor profile: refreshing and sweet like a new crush",
            color: "Fire red up top and yellowish at the bottom like flames"
        },
        {
            name: "kanzi",
            info: "flavor profile: intensely tangy with a sugary punch - personally I would like to try and also name my dog after it",
            color: "red with blotches of yellow"
        }
    ]
}
app.get('/', (request, response) => {
    response.send("this is the root page");
})

app.get('/about',(request, response) =>{
    response.send("this is an about page for the project")

})

app.get('/apples',(request, response)=>{
    response.json(apples);
})

app.get('/apples/:apple',(request,response)=> {
    console.log(request.params.apple);
    let user_apple = request.params.apple;
    let user_object;
    for(let i=0; i<apples.data.length;i++) {
        if(user_apple == apples.data[i].name){
            user_object = apples.data[i];
        }
    }//always test your logic girlie!!!!!
    console.log(user_object);
    if(user_object){
        response.json(user_object);
    }else{
            response.json({status:"info does not exist on that item sorry"}); //this tells the user that there is no info present or there is an error in the code so it instead of not responding correctly it pushes out this message 
        }

})

app.listen(3000, ()=> {
    console.log("app is listening at localhost:3000");
}) // this is basically telling where the server is running