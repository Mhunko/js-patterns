class SimpleMembership {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}

class GoldMembership {
    constructor(name) {
        this.name = name
        this.cost = 100
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        gold: GoldMembership,
        premium: PremiumMembership
    }

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new Membership(name)

        member.type = type
        member.define = function () {
            console.log(`Name: ${this.name}, Type: ${this.type}', Cost: ${this.cost})`)
        }

        return member
    }
}

const factory = new MemberFactory()

const members = [
    factory.create('Maksym', 'gold'),
    factory.create('Denis'),
    factory.create('Elena', 'premium')
]
//console.log(members)
members.forEach((m) => {
    m.define()
})