require("dotenv/config");

module.exports = {
  token: process.env.TOKEN,
  devToken: process.env.DEVTOKEN,
  dblKey: process.env.DBLKEY,
  bodKey: process.env.BODKEY,
  api_key: process.env.GOOGLE_API_KEY,
  genius_api_key: process.env.GENIUS_API_KEY,
  soundCloud_api_key: process.env.SOUNDCLOUD_API_KEY,
  spotify_access_key: process.env.SPOTIFY_ACCESS_KEY,
  spotify_client_secret: process.env.SPOTIFY_CLIENT_SECRET,
  spotify_client_id: process.env.SPOTIFY_CLIENT_ID,
  spotify_refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
  lastfm_api_key: process.env.LASTFM_API_KEY,
  lastfm_secret: process.env.LASTFM_SECRET,
  webhookUrl: process.env.WEBHOOK_URL,
  port: 8888,
  redirectUri: "http://localhost:8888/callback/",
  testServer: "489111553321336832",
  primary_test_channel: "617633098296721409",
  secondary_test_channel: "570531724002328577",
  devId: "360363051792203779",
  embedColor: "#b50002",
  invite: "https://discordapp.com/oauth2/authorize?client_id=607266889537945605&permissions=3427328&scope=bot",
  supportServer: "https://discord.gg/rvHuJtB",
  devMode: true,
  api: false,
  saveDB: true,
  respawn: true,
  shards: 10,
  shardDelay: 10000,
  spawnTimeout: 60000,
  respawnDelay: 1000,
  prefix: ">",
  devPrefix: "-",
  defaultVolume: 50,
  permissions: false,
  dj: false,
  djrole: null,
  startPlaying: true,
  bass: 1,
};

module.exports.streamConfig = {
  ytdlOptions: {
    filter: "audio",
    highWaterMark: 1 << 25,
    volume: false,
    requestOptions: {
      maxRedirects: 4
    }
  },
  options: {
    seek: null,
    bitrate: 1024,
    volume: 1,
    type: "converted",
  },
}

module.exports.queueConfig = {
  textChannel: null,
  voiceChannel: null,
  connection: null,
  songs: [],
  volume: null,
  bass: null,
  nigthCore: false,
  playing: false,
  paused: false,
  looping: false,
  songLooping: false,
  votes: 0,
  voters: [],
  votesNeeded: null,
  time: 0,
  endReason: null,
}

module.exports.emojis = {
  garbage: "🗑️ ",
  green_check_mark: "<:green_check_mark:674265384777416705> ",
  loading: "<a:loading:674284196700618783> ",
  loudSound: ":loud_sound: ",
  megaPhone: "📣 ",
  notes: "<a:aNotes:674602408105476106>",
  pause: "<:pause:674685548610322462> ",
  previous: "<:reverse:705012312142119012> ",
  redx: "<:redx:674263474704220182> ",
  repeat: "<:repeat1:674685561377914892> ",
  repeatSong: "<:repeatsong:674685573419761716> ",
  resume: "<:resume:674685585478254603> ",
  shuffle: "<:shuffle:674685595980791871> ",
  signal: ":signal_strength: ",
  skip: "<:skip:674685614221688832> ",
  speaker: ":speaker: ",
  stop: "<:stop:674685626108477519> ",
  stopWatch: ":stopwatch: ",
  volumeHigh: "<:volumehigh:674685637626167307> ",
}