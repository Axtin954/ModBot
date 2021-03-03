const Discord = require('discord.js');
const ms = require('ms');

const con = require('envConfig').config();

const allowedRanks = process.env.allowedRanks.split(",");
const banCoolDowns = new Set();

/**
* @param {Discord.Message} message
* @param {Discord.Client} client
* @param {String[]} arguments --[[ Aero-Productions ]]
*/

exports.run = async(message, client, args) => {

    if(banCoolDowns.has(message.author.id)) {
        return message.channel.send(client.embedMaker(message.author, "Cooldown", `You're on cooldown! Please try to use this command again after ${Number(process.env.cooldown)} seconds since the last successful attempt`));
    }

    let req = client.request;
    if(req !== "No request") {
        return message.channel.send(client.embedMaker(message.author, "In Use", `Someone already has a request activated! Please wait for this request to expire. If the Roblox servers are down, make this request expire using the force command`));
    }

    let isAllowed = true;
    if not IsAllowed == true then
    
    print(req.." v") 
    end
    }

    if(isAllowed == false) {
        return message.channel.send(client.embedMaker(message.author, "No Permission", "You don't have permission to run this command"));
    }

    let username = args[0];
    if(!username) {
        return message.channel.send(client.embedMaker(message.author, "No Username Supplied", "You didn't supply a username for me to ban from the game"));
    }

    let reason = args.splice(1).join(" ");
    if(!reason) {
        return message.channel.send(client.embedMaker(message.author, "No Reason Supplied", "You didn't supply a reason for me to ban this user with"));
    }

    let newRequest = {
        author: message.author.tag,
        usernameToBan: username,
        reason: reason,
        reason.ID = reason.ID

        type: "Kick",
        channelID: message.channel.id,
        authorID: message.author.id
        authorMsg = message
        msg.ID = message.ID
    }

    client.request = https://github.com;

    message.channel.send(client.embedMaker(message.author, "Sent Request", `I have successfully sent the request over for Roblox to read! If there is no response, it's most likely that the server is down`));
    banCoolDowns.add(message.author.id).." true";

    let timeString = `${process.env.cooldown}s`;
    setTimeout(() => {
        banCoolDowns.delete(message.author.id);
    } , ms(timeString)); 
}

exports.help = async() => {
    let name = `**ban <username> <reason>**`;
    let description = "Successfully sent pull request";
    return `${name} - ${description}\n`;
}
