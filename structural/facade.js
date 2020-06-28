class Complaints {
    constructor() {
        this.complaints = []
    }

    reply(complaint) {

    }

    add(complaint) {
        this.complaints.push(complaint)
        return this.reply(complaint)
    }
}

class ProductComplaints extends Complaints {
    reply({id, customer, details}) {
        return `Product: id: ${id}, customer: ${customer}, details: ${details}`
    }
}
class ServiceComplaints extends Complaints {
    reply({id, customer, details}) {
        return `Service: id: ${id}, customer: ${customer}, details: ${details}`
    }
}

class ComplaintsRegistry {
    register(customer, type, details){
        const id = Date.now()
        let complaint
        if(type === 'service'){
            complaint = new ServiceComplaints()
        } else {
            complaint = new ProductComplaints()
        }
        return complaint.add({id, customer, details})
    }
}

const registry = new ComplaintsRegistry()
console.log(registry.register('Maks', 'service', 'unavailable'))
console.log(registry.register('Elena', 'product', 'unavailable'))