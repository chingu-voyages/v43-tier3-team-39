const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

require('./config/mongoose.config');
require('routes/teamForward.routes')(app);

app.listen(port, ()=> log(`listening on port: ${port}`));