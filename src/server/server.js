const express = require("express");
const PORT = 8000;

const {
    postEmailNewsletter,
} = require("./handlers");

express()
    .use(express.json())
    .post("/api/post-emailNewsletter", postEmailNewsletter)

    .listen(PORT, () => {
        console.log(`Server launched on port ${PORT}`)
    });