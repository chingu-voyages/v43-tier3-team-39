require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const log = require("./helpers/logging");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:3000'
}));

require('./config/mongoose.config');
require('./routes/teamForward.routes')(app);

app.listen(port, ()=> log(`listening on port: ${port}`));