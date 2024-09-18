const express = require('express');
const app = express();
const pool = require("./db");

app.use(express.json()) //=> req.body

//ROUTES//

//get all client

//get a client

app.get("/client", async(req,res) => {
    try{
        //await
        const {email} = req.body;
        const newClient = await pool.query("INSERT INTO client (email) VALUES ($1) RETURNING *",
            [email]
        );
        res.json(newClient);
    }
    catch(err) {
        console.error(err.message);
    }
});

//create a client

//update a client

//delete a client

app.listen(5050, () => {
    console.log('Server listening on port 5050')
});