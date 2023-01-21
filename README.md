# Lighthouse Bulk Testing Software
This repository contains a Javascript script that utilizes the Lighthouse and Chrome-Launcher packages to perform bulk testing of multiple websites for their Lighthouse scores. This script can help you automate the process of testing your website's performance, accessibility, and SEO, and make it more efficient.

## Requirements
Node.js
npm

## Installation
Clone or download the repository
Run npm install to install the required packages
Update the urls array in the script with the URLs you want to test
Run node index.js to execute the script

## Usage
The script will run Lighthouse audits for each URL in the urls array, and return the results in the form of an object. The results will include scores for performance, accessibility, and SEO, as well as actionable suggestions for improvement.

You can customize the script by modifying the config options such as the form factor (mobile or desktop) and the categories you want to test (performance, accessibility, SEO, etc.).

## Expanding Functionality
You can integrate this script with Google Sheets using the Google Sheets API to export the data into a spreadsheet, and easily analyze and share the data with your team.
You can automate the process by using cloud hosting services such as Heroku or DigitalOcean, and schedule regular tests to run automatically.

## Learn More
To learn more about how this script was created and how it can help you improve your website's SEO, check out my Medium article: ["Automating SEO Maintenance with Lighthouse and Chrome-Launcher: A Step-by-Step Guide"](https://medium.com/@aurimas.karvelis01/automating-seo-maintenance-with-lighthouse-and-chrome-launcher-a-step-by-step-guide-1c53ac6003a3)
