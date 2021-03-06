const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoute = require('./users/routes')
// const path = require('path');
const { pool } = require('./dbConfig');
//const router = require('./routes/Movieroutes');

const app = express();

const PORT = process.env.PORT || 5050;
const baseUrl = process.env.BASE_URL || '0.0.0.0';


//db.connect();

//middleware
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api/users", userRoute);


// cors

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Header', '*');
//     next();
// });

var corsOptions = {
	origin: "http://localhost:8001"
};

app.use(cors(corsOptions));


app.get("/", (req, res) => {
    res.send("Welcome to Popcorn We TAKE children's food and make them ours");
})


app.listen(PORT, baseUrl,  () => {
	console.log(`Server is running on port ${PORT}`);
});