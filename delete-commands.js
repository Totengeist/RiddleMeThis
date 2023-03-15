const { REST, Routes } = require('discord.js');
require('dotenv').config()

const rest = new REST({ version: '10' }).setToken(token);

// ...

// for guild-based commands
// rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
	// .then(() => console.log('Successfully deleted all guild commands.'))
	// .catch(console.error);

// for global commands
rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENTID), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);
