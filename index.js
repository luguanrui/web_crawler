const rp = require('request-promise')
const cheerio = require('cheerio')

const opt = {
    uri: 'https://movie.douban.com',
    transform(body){
        return cheerio.load(body)
    }
}

rp(opt).then($=>{
const ss = cheerio.load('<h2 class="title">Hello world</h2>')
    $('#screening li.ui-slide-item').each((index,item)=>{
        console.log($(item).data())
    })
})
