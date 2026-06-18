import express from "express" 
import { router } from "./routes/routes.js"

class App {
    constructor(){
        this.serve = express();
        this.middleware()
        this.routes()   
        
    }

    middleware(){
        this.serve.use(express.json())
    }

    routes(){
        this.serve.use(router)
    }
}

export const app = new App()
