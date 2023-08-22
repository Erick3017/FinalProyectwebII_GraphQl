const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const { ApolloServer } = require('apollo-server-express');
const mongoose = require("mongoose");
const typeDefs = require("./graphql/shemagraphql");
const resolvers = require("./graphql/resolversgraphql");
dotenv.config();

//funcion de la coneccion con mongodb
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
    } catch (error) {
        throw error;
    }
}
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();
const app= express();


const portLisent = 3300;
app.listen(portLisent, () => {
    connect();
    console.log(`graphql listening on port ${portLisent}!`)
})
