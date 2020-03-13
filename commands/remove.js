module.exports = {
    name: 'remove',
    alias: 'rm',
    usage: '<song pos>',
    description: 'Remove a song from the queue',
    onlyDev: false,
    permission: 'MANAGE_MESSAGES',
    category: 'music',
    execute(msg, args, client, Discord, prefix, command) {
        const serverQueue = client.queue.get(msg.guild.id);
        if (client.funcs.check(client, msg, command)) {
            if (!args[1]) return msg.channel.send(client.messages.provideASong);
            const pos = parseInt(args[1]);
            if (isNaN(pos)) return msg.channel.send(client.messages.validNumber);
            if (pos < 1) return msg.channel.send(client.messages.noSongs);
            let message1;
            let message2;
            message1 = client.messages.queueLength.replace("%LENGTH%", serverQueue.songs.length);
            if (pos > serverQueue.songs.length) return msg.channel.send(message1);
            message2 = client.messages.removed.replace("%SONG%", serverQueue.songs[pos].title);
            msg.channel.send(message2);
            return serverQueue.songs.splice(pos, 1);
        }
    }
};
