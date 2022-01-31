const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const config = require('../config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var respoimage = await axios.get(config.PRINCE, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('20210811_082543.jpg'), mimetype: Mimetype.png, caption: `*≈≈≈≈≈≈≈Links ☟︎︎︎≈≈≈≈≈≈≈≈*
 
*owner number wa.me/918590565968*
   
*owner number wa.me/*


*whatsapp group : https://chat.whatsapp.com/FVOdpPLaMvP24rIfTzCGof*


*githublink       _https://github.com/PRINCE-SER/prince_ser*


*audio commads    https://github.com/PRINCE-SER/media/tree/main/uploads*


*sticker commads  https://github.com/PRINCE-SER/media/tree/main/stickers*     
`}) 

})); 
