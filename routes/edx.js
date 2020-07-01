const puppeteer = require('puppeteer');


async function run() {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1200 });
    await page.goto('https://www.edx.org/search?q=web%20development');

    // const IMAGE_SELECTOR = '.d-card-hero > img';
  
    const  data = await page.evaluate(()=> {
          let title = Array.from(document.querySelectorAll('div.d-card-body h3.name-heading')).map((title) => title.innerText);
        let img =Array.from(document.querySelectorAll('div[class="d-card-hero"]>img')).map((logo) => logo.src);
        let description = Array.from(document.querySelectorAll('div.scrollable-mobile-discovery-card-list')).map((title) => title.innerText);
      
        return{
          title,
          img,
          description
        }
      });
      
      
      console.log(data);
      

   
}

run();