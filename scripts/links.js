const baseURL = "https://alandmr.github.io/wdd230/";
const linksURL = "https://alandmr.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.lessons);
    
  }
  
  getLinks();

const ul = document.querySelector('.weekLinks');

const displayLinks = (weeks) => {    
    let inc = 1;
    weeks.forEach((week) => {
        let li = document.createElement('li');
        li.textContent = `${inc}: `
        let i = 0;                 
        if (week.links.length > 1){            
            week.links.forEach(() => {   
                if (i < week.links.length-1){
                    let a = document.createElement('a');   
                    let span = document.createElement('span');          
                    let text = document.createTextNode(`${week.links[i].title}`);                                                                                 
                    a.href = `${week.links[i].url}`;
                    a.appendChild(text);                    
                    span.textContent = ` | `;
                    li.appendChild(a);
                    li.appendChild(span);
                    i++;
                }else if(i == week.links.length-1){
                    let a = document.createElement('a');                       
                    let text = document.createTextNode(`${week.links[i].title}`);                                                                                 
                    a.href = `${week.links[i].url}`;
                    a.appendChild(text);                                        
                    li.appendChild(a);                    
                }
                                 
            });                                    
        }else{
            let a = document.createElement('a');
            let text = document.createTextNode(`${week.links[i].title}`);
            a.title = `${week.links[0].title}`;
            a.href = `${week.links[0].url}`;
            a.appendChild(text); 
            li.appendChild(a);
        }
        inc++;        
        ul.appendChild(li);
    }); // end of arrow function and forEach loop
}
