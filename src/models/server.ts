import express, { Application } from 'express';
import cors from 'cors';
import RouteLogin from '../routes/login.rou';
import RouteLista from '../routes/lista.rou';

class Server{
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.midlewares();
        this.routes();
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Aplicacion corriendo en el puerto ${this.port}`);
        });
    }
    midlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }
    routes(){
        this.app.use('/api/login', RouteLogin);
        this.app.use('/api/lista', RouteLista);
    }
}

export default Server;