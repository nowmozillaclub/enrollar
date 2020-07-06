const puppeteer = require('puppeteer');

const getUrl = (inp)=>{
    input = inp.replace(" ","%20")
    temp = `https://www.edx.org/search?tab=course&q=${input}`
    return temp
}
const run = async(inp)=> {
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1200 });

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
  
    const  data = await page.evaluate(()=> {
        let title = Array.from(document.querySelectorAll('div.d-card-body h3.name-heading')).map((title) => title.innerText);
        let img =Array.from(document.querySelectorAll('div[class="d-card-hero"]>img')).map((logo) => logo.src);
        let description = Array.from(document.querySelectorAll("div[class='provider']>span>span")).map((title) => title.innerText);
        let link = Array.from(document.querySelectorAll("a[class='discovery-card-link']")).map(items=> items['href'])
        let courses = []
        for (let i = 0; i < title.length; ++i){
            let obj = {
                title: title[i].replace("\n"," "),
                body: description[i],
                image: img[i],
                link: link[i],
                by: 'edX'
            }
            courses.push(obj)
        }
        return courses;
      });
    await browser.close();
    return data;
};

module.exports = run;

