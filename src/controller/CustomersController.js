import { prisma } from '../../lib/prisma.ts'
class CustomersController {

    async showAll(req, res){
        const customers = await prisma.customer.findMany()
        let status = customers ? 200 : 400

        return res.json(customers).status(status)
    }
    async showUnique(req, res){
        const customerId = parseInt(req.params.id)
        const customer = await prisma.customer.findUnique({
            where: {
                id: customerId
            }
        })
        let status = customers ? 200 : 400
        return res.json(customer).status(status)
        
    }

    async create(req, res){
        const { name, email } = req.body
        const customer = await prisma.customer.create({
            data: {
                name,
                email
            }
        })
        let status = customers ? 201 : 400
        return res.json(customer).status(status)
    }

    async update(req, res){
        const { id } = req.params
        const { ...customer } = req.body
        const customer = await prisma.customer.update({
            where: {
                id
            },
            data: {
                ...customer
            }
        }) 

        let status = customers ? 200 : 400
        res.json(customer).status(status)
    }

    async destroy(req, res){
        const {id} = req.params
        const customer = await prisma.customer.delete({
            where: {
                id
            }
        })
        let status = customers ? 200 : 400
        res.json(customer).status(status)
    }
}


export const customersController = new CustomersController()