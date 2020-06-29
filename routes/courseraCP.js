const puppeteer = require('puppeteer');
const { waitForDebugger } = require('inspector');

// document.querySelector('div[class="card-info vertical-box"]>h2').innerText


const butt = '.feed > div';
(async () => {
  const browser = await puppeteer.launch({headless:false});
  
 
  const page = await browser.newPage();

  await page .goto('https://www.coursera.org/');

 // clicking the search button

await page.click('#mobile_search_icon_button')

await page.evaluate(() => {
    const name = document.querySelector('.react-autosuggest__input');
    name.value = 'web development';
  });
  // input values in the search field
  await page.$eval('.react-autosuggest__input', el => el.value = 'java');
// clicking the search button after inputing values in the textfield
await page.click('.nostyle search-button')


//queries to get the data of the first course shown,
// works on any course you enter 

let data = await page.evaluate(()=> {

  let title= document.querySelector('div[class="vertical-box"] > div> div>h2').innerText;
  let rating =document.querySelector('div[class="screenreader-only"]  ').innerText;
  let university = document.querySelector('div[class="vertical-box"] > div> div> div >span').innerText;
  let level= document.querySelector('div[class="vertical-box"] > div> div >span').innerText;

  return{
    title,
    rating,
    university,
    level
  }
});


console.log(data);

  


});
