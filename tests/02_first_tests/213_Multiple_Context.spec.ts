import { chromium } from 'playwright';

async function multiUsertest() {
let browser = await chromium.launch({headless : false});

//Admin
let admincontext = await browser.newContext();
let adminpage = await admincontext.newPage();
await adminpage.goto("https://app.vwo.com/login");
console.log("Admin: on login page");

//Viewer
let Viewercontext = await browser.newContext();
let Viewerpage = await Viewercontext.newPage();
await Viewerpage.goto("https://app.vwo.com/login");

//cleanup

await admincontext.close();
await Viewercontext.close();
await browser.close();

}

multiUsertest();



