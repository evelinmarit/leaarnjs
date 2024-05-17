import * as cheerio from 'cheerio';
//const delay = (delayInms) => {
//    return new Promise(resolve => setTimeout(resolve, delayInms));
//};
for(let i = 3081; i>3071; i--){
    let response = await fetch(`https://www.geekculture.com/joyoftech/joyarchives/${i}.html`);
    response = await response.text();
    //console.log(response);
    const $ = cheerio.load(response);
    let img = $('img');
    console.log(img.attr('src'));
    console.log(img.attr('alt'));
    //await delay(3000);
}
