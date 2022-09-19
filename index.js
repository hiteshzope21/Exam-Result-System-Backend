const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const logger = require("morgan")


app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(process.env.MONGO_URL, ()=>{
    console.log("MongoDB connected ");
});

const studentRouter = require("./routes/student.routes");
const authRoutes = require("./routes/auth.routes");
const resultRouter = require("./routes/result.routes");

app.use( authRoutes );
app.use( studentRouter );
app.use( resultRouter );



app.listen(process.env.PORT, () => {
    console.log(`Application has started on the port http://localhost:${ process.env.PORT }` );
})
