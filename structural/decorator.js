class Server{
    constructor(ip, port) {
        this._ip = ip
        this.port = port
    }
    get url(){
        return `http://${this.ip}:${this.port}`
    }
}
//decorator
function aws(server){
    server.isAws = true
    server.awsInfo = function () {
        return server.url
    }
    return server
}

const s1 = aws(new Server('123.333.23.32', 80))
console.log(s1.isAws)
console.log(s1.awsInfo())