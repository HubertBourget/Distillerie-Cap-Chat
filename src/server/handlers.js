"use strict";

const { v4: uuidv4 } = require("uuid");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const postEmailNewsletter = async (req, res) => {
    console.log(req.body);
    const newsletterData = {
        _id: uuidv4(),
        profileData: req.body
    }

    const client = await new MongoClient(MONGO_URI, options);
    try{
        client.connect();
        console.log("connected!");
        const db = client.db('db-name');
        const result = await db.collection("newsletter").insertOne(newsletterData);
        res.status(200).json({ status: 200, result: result })
        client.close();
        console.log("disconnected!");
    }
    catch (e){
        res.status(400).json({ status: 400, message: e.message })
    }
}


module.exports = {
    postEmailNewsletter,
};