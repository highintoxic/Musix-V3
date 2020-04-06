const emojis = require('./emojis.ts');

module.exports = {
    alreadyPaused: emojis.redx + "The music is already paused!",
    alreadyVoted: emojis.redx + "You have already voted to skip!",
    announceSongs: emojis.megaPhone + "Current setting:",
    announceSongsFalse: emojis.green_check_mark + "announcesongs now set to `false`!",
    announceSongsTrue: emojis.green_check_mark + "announcesongs now set to `true`!",
    bassApplied: emojis.volumeHigh + "The bass level **%BASS%** will be applied when the next song starts playing!",
    bassFalse: emojis.green_check_mark + "Bass is now false!",
    bassLevel: emojis.green_check_mark + "Bass level is now",
    boolean: emojis.redx + "Please define a boolean! (true/false)",
    cancellingVideoSelection: emojis.redx + "Cancelling video selection",
    cantSkipToCurrent: emojis.redx + "You can't skip to the song currently playing!",
    channelFull: emojis.redx + "Your voice channel is full!",
    cmdUsesFooter: "These statistics are from the current uptime.",
    cmdUsesTitle: "Musix Command Usage During Current Uptime",
    correctUsage: emojis.redx + "correct usage: ",
    currentBass: emojis.loudSound + "The current bass is: ",
    currentDefaultBass: emojis.speaker + "Currect default bass level: ",
    currentDefaultVolume: emojis.speaker + "Current default volume is:",
    currentPrefix: "Current prefix:",
    currentVolume: emojis.loudSound + "The current volume is: ",
    dbSaved: emojis.green_check_mark + "DB Saved!",
    defaultVolumeMax: emojis.redx + "The default volume must be below `100` for quality and safety resons.",
    defaultVolumeNumber: emojis.redx + "I'm sorry, But the default volume needs to be a valid __number__.",
    defaultVolumeSet: emojis.green_check_mark + "Default volume set to:",
    devMode: emojis.redx + "Dev mode has been turned on! Commands are only available to developer(s)!",
    dispatcherError: "Error with the dispatcher: ",
    djFalse: emojis.green_check_mark + "`DJ` now set to `false`",
    djRoleCreated: emojis.green_check_mark + "I did not find a role `DJ` so i have created one for you!",
    djRoleFound: emojis.green_check_mark + "I found a `DJ` role from this guild! This role is now the DJ role.",
    error: emojis.redx + "An error occured!",
    errorConnecting: "Error with connecting to voice channel: ",
    errorDetected: "Error detected: ",
    errorDispatcher: emojis.redx + "An error has occured while playing music! The queue has been deleted.",
    errorExe: emojis.redx + "there was an error trying to execute that command!",
    errorExeOpt: emojis.redx + "there was an error trying to execute that option!",
    evalTitle: "Evaluation Command",
    helpCmdFooter: "Command Alias:",
    helpFooter: "\"%PREFIX%help <command>\" to see more information about a command.",
    helpTitle: "help",
    inviteTitle: "Invite Musix to your Discord server!",
    joined: emojis.green_check_mark + "Joined",
    joinSupport: "Join the musix support server: ",
    loadingSongs: emojis.loading + "Loading song(s)",
    looping: emojis.repeat + "Looping the queue now!",
    loopingSong: emojis.repeatSong + "Looping **%TITLE%** now!",
    maxBass: emojis.redx + "The max bass is `100`!",
    maxVolume: emojis.redx + "The max volume is `100`!",
    noDj: emojis.redx + "You need the `DJ` role to use this command!",
    noLooping: emojis.repeat + "No longer looping the queue!",
    noLoopingSong: emojis.repeatSong + "No longer looping the song!",
    noPerms: emojis.redx + `You need the %PERMS% permission to use this command!`,
    noPermsConnect: emojis.redx + "I cannot connect to your voice channel, make sure I have the proper permissions!",
    noPermsEmbed: emojis.redx + "I cannot send embeds (Embed links), make sure I have the proper permissions!",
    noPermsManageRoles: emojis.redx + "I cannot create roles (Manage roles), make sure I have the proper permissions! I will need this permission to create a `DJ` role since i did not find one!",
    noPermsManageSettings: emojis.redx + "You need the `MANAGE_SERVER` permission to change the settings!",
    noPermsSpeak: emojis.redx + "I cannot speak in your voice channel, make sure I have the proper permissions!",
    noPermsUseExternalEmojis: emojis.redx + "I cannot use external emojis, make sure I have the proper permissions!",
    noQuery: emojis.redx + "you need to use a link or search for a song!",
    noResults: emojis.redx + "I could not obtain any search results!",
    noServerQueue: emojis.redx + "There is nothing playing!",
    noSongs: emojis.redx + "That song does not exist!",
    nowPlayingDesc: emojis.notes + "**Now playing:**",
    notAllowed: emojis.redx + "You are not allowed to do that!",
    notEnoughVotes: emojis.redx + "Not enough votes!",
    notPaused: emojis.redx + "The music in not paused!",
    noVoiceChannel: emojis.redx + "I'm sorry but you need to be in a voice channel to play music!",
    nowPlaying: "__Now playing__",
    paused: emojis.pause + "Paused the music!",
    permission: "🔒 Permission requirement:",
    permissionsFalse: emojis.redx + "That value is already `false`!",
    permissionsSetFalse: emojis.green_check_mark + "Permissions requirement now set to: `false`",
    permissionsSetTrue: emojis.green_check_mark + "Permissions requirement now set to: `true`",
    permissionsTrue: emojis.redx + "That value is already `true`!",
    pinging: emojis.loading + "Pinging...",
    playlistAdded: emojis.green_check_mark + "Playlist: **%TITLE%** has been added to the queue!",
    positiveBass: emojis.redx + "The bass needs to be a positive number!",
    positiveVolume: emojis.redx + "The volume needs to be a positive number!",
    prefixHere: "My prefix here is: ",
    prefixMaxLength: "The prefix must be shorter or equal to 5 letters!",
    prefixSet: emojis.green_check_mark + "New prefix set to:",
    provideANumber: "Please provide a number ranging from 1-10 to select one of the search results.",
    provideASong: emojis.redx + "Please provide a song position in queue for me to remove!",
    queueDeleted: "Queue deleted!",
    queueDesc: "**Now playing:** %SONG%<a:aNotes:674602408105476106>\n:arrow_down: Next in queue :arrow_down:",
    queueFooter: "songs in the queue!",
    queueLength: emojis.redx + "There are only %SONGS% amount of songs in the queue!",
    queueTitle: "__Song queue__",
    quotaReached: emojis.redx + "Quota reached please try again after midnight Pacific Time (PT)!",
    reloaded: "All files reloaded!",
    removed: emojis.garbage + "removed `%SONG%` from the queue!",
    reset: emojis.green_check_mark + "Reset __all__ guild settings!",
    restart: "restarting all shards...",
    resumed: emojis.resume + "Resumed the music!",
    seekingPointPositive: emojis.redx + "The seeking point needs to be a positive number!",
    seekMax: emojis.redx + "The lenght of this song is %LENGTH% seconds! You can't seek further than that!",
    settingsAnnounceSongs: "announcesongs",
    settingsAnnounceSongsDesc: "Whether to announce songs that start playing or not.",
    settingsBass: "bass",
    settingsBassDesc: "Change the default bass level.",
    settingsFooter: "how to use: %PREFIX%settings <Setting name> <value>",
    settingsPermissions: "permissions",
    settingsPermissionsDesc: "Change whether to require permissions to use eg `skip, stop, pause, loop, etc...`",
    settingsPrefix: "prefix",
    settingsPrefixDesc: "Change the guild specific prefix. (string)",
    settingsSetDj: "setdj",
    settingsSetDjDesc: "Set a DJ role. This will allow chosen users to freely use all Musix commands. This will automatically set the `permissions` settings to true in order for the `DJ` role to have effect!",
    settingsTitle: "Guild settings for Musix",
    settingsVolume: "volume",
    settingsVolumeDesc: "Change the default volume that the bot will start playing at. (number)",
    setVolume: emojis.volumeHigh + "I set the volume to: ",
    shuffled: emojis.shuffle + "Queue suffled!",
    skipped: emojis.skip + "Skipped the song!",
    songAdded: emojis.green_check_mark + "**%TITLE%** has been added to the queue!",
    songBlockedWMG: emojis.redx + "This song had been blocked by WMG (Warner Music Groud).\n<:skip:674685614221688832> Skipped to next song.",
    songSelection: "__Song Selection__",
    startPlaying: emojis.notes + "Start playing: ",
    statusField1: emojis.signal + "Ping",
    statusField2: "Latency",
    statusField3: emojis.stopWatch + "Uptime",
    statusField4: "Shard: ",
    statusTitle: "Status for Musix",
    stop: emojis.stop + "Stopped the music!",
    validNumber: emojis.redx + "I'm sorry, But you need to enter a valid __number__.",
    wrongVoiceChannel: emojis.redx + "I'm sorry but you need to be in the same voice channel as Musix to use this command!",
};
