import { prisma } from '../../lib/prisma.ts'
class CustomersController {

    async showAll(req, res){
        const customers = await prisma.customer.findMany()
        let status = customers ? 200 : 400

        return res.json(customers).status(status)
    }
    showUnique(req, res){
        const id = parseInt(req.params.id)
        const customer = req.body.find((item) => {
            if(id === (item.id)){
                return item
            }
            return 
        })
        return res.json(customer)
        
    }

    create(req, res){
        const name = req.params.name
        let finded = db.find((item, index, array) => {
            if(!(item.id == (index+1))) return item
            if(item.id == array.length) return item
          }).id
        
        const customer = {
            id: finded < db.length ? finded : finded+1,
            name
        }

        db.push(customer)
        return res.json(db)
    }

    update(req, res){
        const { id, name } = req.params
        const customer = db.at(id-1)

        customer.name = name

        res.send(db)
    }

    destroy(req, res){
        const {id} = req.params
        const customer = db.find((item) => {
            return id == item.id
        });
        db.splice(customer.id -1, customer.id)

        res.send(db)
    }
}


export const customersController = new CustomersController()