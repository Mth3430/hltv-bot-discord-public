const { Client, GatewayIntentBits, Partials, AttachmentBuilder, EmbedBuilder} = require('discord.js');
const client = new Client({intents: [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers], partials: [Partials.Channel] })
const auth = require('./auth.json');
const fs = require('fs');

const imageUrls = [
        '.\\images\\zywoo1.jpg',
        '.\\images\\zywoo2.jpg',
        '.\\images\\zywoo3.jpg',
        '.\\images\\zywoo4.jpg',
        '.\\images\\zywoo5.jpeg',
        ".\\images\\zywoo6.jpeg"
    ];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.content === 'hzywoo') {
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        var image =  imageUrls[randomIndex];
        var data = process.cwd() + image;
        console.log("Current directory:", data);
        console.log(fs.readFileSync(image));
        const attachment = new AttachmentBuilder(fs.readFileSync(image), { name: image })
        message.channel.send({files: [attachment]});
    }
    if (message.content === 'htopteam') {
        fetch('https://hltv-api.vercel.app/api/teams.json')
            .then(response => response.json())
            .then(data => {
                console.log(data.logo);
                const embed1 = 
                    new EmbedBuilder()
                        .setTitle('top team')
                        .setImage(data.logo)
                        .addFields({name: 'name', value: data.name},)
                const embed2 =
                    new EmbedBuilder()
                        .addFields({name:'player:', value: data.players[0].fullname},)
                        .setImage(data.players[0].image)
                const embed3 =
                    new EmbedBuilder()
                        .addFields({name:'player:', value: data.players[1].fullname},)
                        .setImage(data.players[1].image)
                const embed4 =
                    new EmbedBuilder()
                        .addFields({name:'player:', value: data.players[2].fullname},)
                        .setImage(data.players[2].image)
                const embed5 =
                    new EmbedBuilder()
                        .addFields({name:'player:', value: data.players[3].fullname},)
                        .setImage(data.players[3].image)
                const embed6 =
                    new EmbedBuilder()
                        .addFields({name:'player:', value: data.players[4].fullname},)
                        .setImage(data.players[4].image)
                message.channel.send({ embeds: [embed1, embed2, embed3, embed4, embed5, embed6]});
            })
            .catch(error => console.error(error)); 
    }
    if (message.content === 'hresults') {
        fetch('https://hltv-api.vercel.app/api/results.json')
            .then(response => response.json())
            .then(data => {
                const embeds = []
                var i = 0
                while (i < 3) {
                    embeds.push(new EmbedBuilder()
                        .setTitle(data[i].event.name)
                        .setImage(data[i].event.logo)
                        .addFields({name:'maps:', value: data[i].maps},)
                    );
                    embeds.push(new EmbedBuilder()
                        .setTitle(data[i].teams[0].name)
                        .setImage(data[i].teams[0].logo)
                        .setFooter({text: `results: ${data[i].teams[0].result}`})
                    );
                    embeds.push(new EmbedBuilder()
                        .setTitle(data[i].teams[1].name)
                        .setImage(data[i].teams[1].logo)
                        .setFooter({text: `results: ${data[i].teams[1].result}`})
                    );
                    i = i + 1;
                }
                message.channel.send({ embeds });
            })
            .catch(error => console.error(error)); 
    }
    if (message.content === 'hmatches') {
        fetch('https://hltv-api.vercel.app/api/matches.json')
            .then(response => response.json())
            .then(data => {
                const embeds = []
                var i = 0
                embeds.push(new EmbedBuilder()
                        .setTitle("Nexts Matches")
                    );
                while (i < 3) {
                    embeds.push(new EmbedBuilder()
                        .setTitle(data[i].event.name)
                        .setImage(data[i].event.logo)
                        .addFields({name:'maps:', value: data[i].maps},)
                    );
                    embeds.push(new EmbedBuilder()
                        .setTitle(data[i].teams[0].name)
                        .setImage(data[i].teams[0].logo)
                    );
                    embeds.push(new EmbedBuilder()
                        .setTitle(data[i].teams[1].name)
                        .setImage(data[i].teams[1].logo)
                    );
                    i = i + 1;
                }
                message.channel.send({ embeds });
            })
            .catch(error => console.error(error)); 
    }
    if (message.content === 'hrating') {
        fetch('https://hltv-api.vercel.app/api/match.json')
            .then(response => response.json())
            .then(data => {
                const embeds = []
                var i = 0
                while (i < 10) {
                    embeds.push(new EmbedBuilder()
                        .setTitle(data[i].nickname)
                        .addFields({name:'team:', value: (data[i].team).toString()},
                        {name:'maps played:', value: (data[i].mapsPlayed).toString()},
                        {name: 'kd', value: (data[i].kd).toString()}, 
                        {name: 'rating', value: (data[i].rating).toString()})
                    );
                    i = i + 1;
                }
                message.channel.send({ embeds });
            })
            .catch(error => console.error(error)); 
    }
    if (message.content === 'htopplayer') {
        fetch('https://hltv-api.vercel.app/api/players.json')
            .then(response => response.json())
            .then(data => {
                const embed = new EmbedBuilder()
                        .setTitle(data.nickname)
                        .addFields(
                        {name: 'name', value: (data.name).toString()},
                        {name:'team:', value: data.team.name},
                        {name:'maps played:', value: (data.mapsPlayed).toString()},
                        {name: 'rating:', value: (data.rating).toString()}, 
                        {name: 'impact', value: (data.impact).toString()},
                        {name: 'age', value: (data.age).toString()},
                        {name: 'dpr', value: (data.dpr).toString()},
                        {name: 'adr', value: (data.adr).toString()},
                        {name: 'kast', value: (data.kast).toString()},
                        {name: 'kpr', value: (data.kpr).toString()},
                        {name: 'headshots', value: (data.headshots).toString()},
                        )
                        .setImage(data.image)
                message.channel.send({ embeds: [embed] });
            })
            .catch(error => console.error(error)); 
    }
    if (message.content === 'hranking') {
        fetch('https://hltv-api.vercel.app/api/player.json')
            .then(response => response.json())
            .then(data => {
                const embeds = []
                var i = 0
                while (i < 10) {
                    embeds.push(new EmbedBuilder()
                        .setTitle(data[i].name)
                        .addFields({name:'rank:', value: (i + 1).toString()},)
                        .setImage(data[i].logo)
                    );
                    i = i + 1;
                }
                message.channel.send({ embeds });
            })
            .catch(error => console.error(error)); 
    }
    if (message.content === 'hnews') {
        fetch('https://hltv-api.vercel.app/api/news.json')
            .then(response => response.json())
            .then(data => {
                const embeds = []
                var i = 0
                while (i < data.length) {
                    embeds.push(new EmbedBuilder()
                        .setTitle(data[i].title)
                        .addFields({name:'description:', value: data[i].description}, {name: 'link', value: data[i].link},),
                    );
                    i = i + 1;
                }
                message.channel.send({ embeds });
            })
            .catch(error => console.error(error)); 
    }
});

client.login(auth.token);