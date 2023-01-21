const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

const urls = [
  'https://google.com',
  'https://medium.com',
];

async function runLighthouse(url, config = null) {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  config = config || {};
  config.port = chrome.port;
  config.emulatedForm = config.emulatedForm || {formFactor: 'mobile'};
  const results = await lighthouse(url, config, null);
  await chrome.kill();
  return results;
}


async function init(){
    const results = {};
    for (const url of urls) {
        console.log(`Testing URL: ${url}`)
        results[url] = {};
        results[url]['mobile'] = await runLighthouse(url, {emulatedForm: {formFactor:'mobile'}, onlyCategories: ['performance', 'accessibility', 'seo']});
        results[url]['mobile'] = await runLighthouse(url, {emulatedForm: {formFactor:'desktop'}, onlyCategories: ['performance', 'accessibility', 'seo']});
    }
    return results
}

const response = init()

response.then(console.log).catch(console.error)