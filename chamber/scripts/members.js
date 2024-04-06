const companiesInfo = "data/members.json";

async function getCompanies() {
    const response = await fetch(companiesInfo);
    const data = await response.json();    
    displayCompanies(data.companies);
    
  }
  
  getCompanies();

const mainTag = document.querySelector('main');

const displayCompanies = (companies) => {        
    companies.forEach((company) => {
        let section = document.createElement('section');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let a = document.createElement('a');
        
        section.classList.add("card");
        h3.textContent = `${company.name}`;
        img.setAttribute('src',company.image);
        img.setAttribute('alt', `Logo ${company.name}`);
        p1.textContent = `${company.address}`;
        p2.textContent = `${company.phone}`;
        p3.textContent = `${company.membershipLevel}`;
        let text = document.createTextNode(`Website`);                                                                                 
        a.href = `${company.url}`;
        a.appendChild(text);

        section.appendChild(h3);
        section.appendChild(img);
        section.appendChild(p1);
        section.appendChild(p2);
        section.appendChild(p3);
        section.appendChild(a);

     
        mainTag.appendChild(section);
    }); // end of arrow function and forEach loop
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("main");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}