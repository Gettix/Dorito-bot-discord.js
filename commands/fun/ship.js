const superagent = require("snekfetch");
const Discord = require('discord.js')
const Jimp = require(`jimp`)

exports.run = async (client, message, args, level) => {

let replies = [`Will Never Work`, `Slight Chance of Working`, `gay`, `Can Work`, `Could Work`, `High Chance of Working`, `OwO`, `UwU`, `PERFECT MATCH ?`]
        let result = Math.floor(Math.random() * replies.length);
        let mUser = message.mentions.users.first()
        let mUser2 = message.mentions.users.last()
        if(!mUser) return message.channel.send(`Please specifify two users when using this command!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.glitch.com/132f2977-9bb1-4569-804b-2a36200cd8f0%2FShipping.jpg?1541712075902`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(30)
                      .resize(866, 866)
                      .write("commands/shipimg/imagetouse.jpg");
            Jimp.read(mUser2.avatarURL, function (err, imagetouse2) {
            if (err) throw err;
            imagetouse2.quality(30)
                      .resize(866, 866)
                      .write("commands/shipimg/imagetouse2.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(function (font) {
                    mydude.quality(30)
                    mydude.print(font, 635, 1717, `${message.author.username}`)
                    mydude.composite( imagetouse, 784, 797 )
                    mydude.composite( imagetouse2, 2191, 797)
                    mydude.write("commands/shipimg/saveme.jpg")
                    mydude.getBuffer(`image/jpeg`, (err, buf) => {
                        if (err) return err;
                        message.channel.send({files: [{attachment: buf, name: `saveme.jpg`}] })
                        message.channel.send(replies[result])
                    })
                })
            })}
        )})
	
}