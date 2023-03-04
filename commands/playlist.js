const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("playlist")
    .setDescription("Ouça a melhor playlist de estudos"),

  async execute(interaction) {
    await interaction.reply(
      "https://open.spotify.com/playlist/0jTnXDuL60h4PFuStLmVoq?si=c86be2b932bb48ce"
    );
  },
};
