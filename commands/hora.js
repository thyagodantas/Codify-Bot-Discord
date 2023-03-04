const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const moment = require("moment");
let hora = moment().format("HH:mm:ss");

const dataEmbed = new EmbedBuilder()
  .setColor("Purple")
  .setTitle("Horas nesse exato momento:")
  .addFields({
    name: hora,
    value: " ",
    inline: true,
  });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hora")
    .setDescription(`Retorna a hora, minutos e segundos"`),
  async execute(interection) {
    await interection.reply({ embeds: [dataEmbed] });
  },
};
