const fetch = require("node-fetch");
const axios = require("axios");
const client = require("discord.js");

//Config
let group = 4382797; //Group ID
let goal = 100000; //Member Goal

const webhook = new client.WebhookClient(
  "718957476643430194630", //Webhook ID
  "kfsgCxKmx8dk47yECOYEW9ttGUwER9o9dfs3344dDpVxBztbLdX1BOmSvmoBqlmAtv_4W" //Webhook Token
);
async function updateCount() {
  let response = await axios.get(
    `https://groups.roblox.com/v1/groups/${group}/`
  );
  let members = response.data.memberCount;
  let count = 100;
  if (count < members) {

    const embed = new client.RichEmbed();
    webhook
      .send(embed)
      .setTitle("") //Title of Embed
      .setColor("#0099ff") //Color [HEX]
      .setDescription(  `We are at **${members}** members.\n\n${goal - members} members to go till ${goal}!` ); //Feel free to customize this to your fitting.
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

