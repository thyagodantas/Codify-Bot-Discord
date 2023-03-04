const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const moment = require("moment");
const date = moment();
let hoje = date.format("DD/MM/YYYY");

const dataEmbed = new EmbedBuilder()
  .setColor("Purple")
  .setTitle("Data de hoje")
  .addFields({
    name: hoje,
    value: " ",
    inline: true,
  });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("data")
    .setDescription(`Retorna o dia de hoje"`),
  async execute(interection) {
    await interection.reply({ embeds: [dataEmbed] });
  },
};
