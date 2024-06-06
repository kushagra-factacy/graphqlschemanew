const express = require(`express`);


var { createHandler } = require("graphql-http/lib/use/express")
const schema = require('./schema.js');
const bodyParser= require('body-parser')

const resolvers = require('./resolver.js');




const app = express();
const validapikey = function(req,res,next){
    const apikey= req.headers["api-key"]
    console.log(apikey);
    const APIKEY="1234";
    if (APIKEY!== apikey)
        {
            return "unauthorised"

        }
        next()
}


app.use(validapikey)
app.use(bodyParser.json())
app.all('/graphql',createHandler({
    schema: schema,
    rootValue: resolvers,
    graphiql:true,
}));

const port = 4002;
app.listen(port ,()=>{
    console.log(`server is litening on port 4002`);

});
