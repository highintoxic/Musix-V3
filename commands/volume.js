module.exports = {
	name: 'volume',
	description: 'Volume command.',
	alias: 'none',
	cooldown: 5,
	onlyDev: false,
	permission: 'MANAGE_MESSAGES',
	category: 'music',
	execute(msg, args, client, Discord, prefix, command) {
		const serverQueue = client.queue.get(msg.guild.id);
		if (!args[1] && serverQueue) return msg.channel.send(`:loud_sound: The current volume is: **${serverQueue.volume}**`);
		const volume = parseFloat(args[1]);
		if (client.funcs.check(client, msg, command)) {
			if (isNaN(volume)) return msg.channel.send('<:redx:674263474704220182> I\'m sorry, But you need to enter a valid __number__.');
			if (volume > 100) return msg.channel.send('<:redx:674263474704220182> The max volume is `100`!');
			if (volume < 0) return msg.channel.send('<:redx:674263474704220182> The volume needs to be a positive number!');
			serverQueue.volume = volume;
			serverQueue.connection.dispatcher.setVolume(volume / 5);
			return msg.channel.send(`<:volumehigh:674685637626167307> I set the volume to: **${volume}**`);
		}
	}
};