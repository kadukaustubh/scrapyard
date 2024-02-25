const express = require('express');
const cors = require('cors');
const dbConnect = require('./db/dbConnect');
const auth = require("./auth");

const loginRoute = require('./routes/loginRoute');
const registerRoute = require('./routes/registerRoute');
const updateRoute = require('./routes/updateNoteRoute');
const dashboardRoute = require('./routes/dashboardRoute');

dbConnect();

const app = express();
const port = process.env.PORT || 5000;

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});


app.use(cors());
app.use(express.json());

app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/update', updateRoute);
app.use('/dashboard', dashboardRoute);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// authentication endpoint
app.get("/auth-endpoint", auth, (request, response) => {
    response.json({ message: "You are authorized to access me" });
});