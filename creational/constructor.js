/*function Server(name, ip) {
    this.name = name
    this.ip = ip
}

Server.prototype.getUrl = function () {
    return `http//${this.ip}`
}*/
class Server {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }

    getUrl() {
        return `http//${this.ip}`
    }
}


const aws = new Server('awsUs', '192.168.20.1')
console.log(aws.getUrl())