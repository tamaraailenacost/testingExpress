const express = require('express');

//imports
const routerTesting = require('../routers/tester')


class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT || 3000;
        this.middlewares();
        this.routes();
        this.start();

    }


    middlewares = () => {

        this.app.use(express.static('public'));

    }

    routes = () => {

        this.app.use('/api', routerTesting);
    }



    start = () => {

        this.app.listen(this.port, () => {

            console.log("servidor corriendo en el puerto,", this.port);
        });
    }


}

module.exports = Server;