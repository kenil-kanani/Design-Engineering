//! Third Party modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

//! Custom modules
const { connectToMongo } = require('./src/config/databaseConfig');
const { PORT } = require('./src/config/serverConfig');
const ApiRoutes = require('./src/routes/index');

//* Defination of legend function
const setUpAndStartServer = async () => {

    const corsOptions = {
        origin: true, //included origin as true
        // origin: ["https://canvas.kenil.in"], //included origin as true
        credentials: true, //included credentials as true
    };

    try {
        //- connect to database
        await connectToMongo();

        const app = express();

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.use(cors(corsOptions));
        app.use(cookieParser());

        app.use('/api', ApiRoutes);

        app.listen(PORT, () => {
            console.log("Server started on PORT : ", PORT);
        });
    } catch (error) {
        console.log("Error, connecting to database..." + error);
        throw error;
    }
}

//* Calling the legend function of the file...
setUpAndStartServer();