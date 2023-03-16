			const express = require("express");
			const app = express();
			const portNum = 8000;
			
			
			
			app.use(cors({
			    origin: "http://localhost:3000"
			}));
			app.use(express.json());
			app.use(express.urlencoded({extend: true}));
			
			//config
			//routes
			
app.listen(portNum, () => console.log(`Server connected on port ${portNum}`));