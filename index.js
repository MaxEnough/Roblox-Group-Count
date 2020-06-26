const fetch = require("node-fetch");
const axios = require("axios");
const client = require("discord.js");

//Config
let group = 4382797; //Group ID
let goal = 100000; //Member Goal

const webhook = new client.WebhookClient(
  "718957476640194630", //Webhook ID
  "kfsgCxKmx8dk47yECOYEW9ttGUwER9o9dfsSUZ8DpVxBztbLdX1BOmSvmoBqlmAtv_4W" //Webhook Token
);
async function updateCount() {
  let response = await axios.get(
    `https://groups.roblox.com/v1/groups/${group}/`
  );
  let members = response.data.memberCount;
  let count = 100;
  console.log("got request");
  if (count < members) {
    console.log(members, count);

    const embed = new client.RichEmbed();
    webhook
      .send(embed)
      .setTitle("") //Title of Embed
      .setColor("#0099ff") //Color [HEX]
      .setDescription(  `We are at **${members}** members.\n\n${goal - members} members to go till ${goal}!` );
    webhook.send(embed);

    if (count == 0) {
      count = members;
      return;
    }
    count = members;
  }
}
setInterval(() => {
  updateCount();
}, 10000);

//Feel free to customize the description using the following varibles:

/*
members - Members the group has.
goal - Member goal which can be sit in the constant above.


I suggest you keep the Description the same unless you know what you are doing.
*/


