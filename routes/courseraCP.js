const puppeteer = require('puppeteer');
const getUrl = (inp)=>{
    input = inp.replace(" ","%20")
    temp = `https://www.coursera.org/search?query=${input}`
    return temp
}

const getCourses = async (inp) => {
    console.log("start")
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
    const page = await browser.newPage();

    await page.setDefaultNavigationTimeout(0); 

    //blocking site's css, images and fonts
    await page.setRequestInterception(true);
    page.on('request', (req) => {
        if(req.resourceType() == 'stylesheet' || req.resourceType() == 'font' || req.resourceType() == 'image'){
            req.abort();
        }
        else {
            req.continue();
        }
    });

    await page.goto(getUrl(inp), {waitUntil: 'networkidle2', timeout:300000})
        .then(()=>{
        console.log("redirected successfully!")
        }).catch(err=>{
            console.log("Error occured! Error:",err)
        });
    //queries to get the data of the first course shown,
    // works on any course you enter 
    await page.waitFor('.horizontal-box')
    var data = await page.evaluate(()=> {
        location.reload(true)
        let rating =document.querySelectorAll('div[class="screenreader-only"]  ');
        let title= document.querySelectorAll("h2[class='color-primary-text card-title headline-1-text']")
        let university = document.querySelectorAll('div[class="vertical-box"] > div> div> div >span');
        let level= document.querySelectorAll('div[class="product-difficulty"] >span');
        let image = document.querySelectorAll("div[class='vertical-box']>div>div>img");
        let link = document.querySelectorAll("li[class='ais-InfiniteHits-item']>div>a");
        let courses = []
        for (let i = 0; i < rating.length; ++i){
            let obj = {
                title: title[i].innerText,
                rating: rating[i].innerText,
                university: university[i].innerText,
                level: level[i].innerText,
                image: image[i]['src'],
                link: link[i]['href']
            }
            courses.push(obj)
        }

        return courses
    });
    await browser.close();
    return data;
};

module.exports = getCourses;

