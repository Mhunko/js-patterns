class Database{
    constructor(data) {
        if(Database.exists){
            return Database.instance
        }

        Database.instance = this
        Database.exists = true
        this.data = data
    }

    getData() {
        return this.data
    }
}

const mongo = new Database('usersOfMongo')
console.log(mongo.getData())

const mysql = new Database('usersOfMysql')
console.log(mysql.getData())
