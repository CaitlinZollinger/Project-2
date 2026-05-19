const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const usermodel = require('./schema/user');

require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// The "Hello World" Route
// app.get('/api/hello', (req, res) => {
//   res.json({ message: "Hello from the MERN Server!" });
// });

app.post("/api/submituser",(request,response)=>{
    console.log("submitted request", request.body)

    let user = new usermodel({
        name: request.body.body.name,
        age: request.body.body.age
    })

    try {
        user.save().then(data=>{
            console.log(data)
        });
    } catch (error) {
        console.error('Error saving user:', error);
    }

    response.send("response")
})


app.get("/api/getusers",(request,response)=>{
    // console.log("submitted request", request.body)
    usermodel.find({}).then(data=>{
        console.log(data)
        response.send(data)
    })
    
})



// Database Connection
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log("DB Connection Error:", err));
