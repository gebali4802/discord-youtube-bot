module.exports = {
    name:"ping",
    execute(message){
        message.reply(`Pong!\nYoutube-Bot Ping : ${message.client.ws.ping}`)
    }
}