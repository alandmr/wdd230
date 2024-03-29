const baseURL = "https://github.com/alandmr/wdd230/";
const linksURL = "https://github.com/alandmr/wdd230/scripts/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
  }
  
  getLinks();
