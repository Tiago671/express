import { Router } from "express";
import { customersController } from "../controller/CustomersController.js"

const router = new Router();

router.get("/customers", customersController.showAll)
router.get("/customers/:id", customersController.showUnique)
router.post("/customers/:name", customersController.create)
router.put("/customers/:id/:name", customersController.update)
router.delete("/customers/:id", customersController.destroy)

export { router }