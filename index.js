// index.js
const puppeteer = require("puppeteer");

async function openLinkedIn(url, headlessMode = true) {
  const browser = await puppeteer.launch({
    headless: headlessMode,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  console.log(
    `Opened ${url} in ${headlessMode ? "headless" : "non-headless"} mode.`
  );

  if (headlessMode) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await browser.close();
  } else {
    console.log("Browser will stay open. Close manually to exit.");
  }
}

// Example usage:
const args = process.argv.slice(2);
const url = args[0] || "https://www.linkedin.com";
const headlessArg = args[1] === "true"; // default false

openLinkedIn(url, headlessArg);
