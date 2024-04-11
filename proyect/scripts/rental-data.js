const companiesInfo = "data/rental-data.json";

async function getCompanies() {
    const response = await fetch(companiesInfo);
    const data = await response.json();    
    displayRentalPricing(data.rentalPricing);
    
  }
  
  getCompanies();

const mainTag = document.querySelector('main');

const displayRentalPricing = (details) => {        
    details.forEach((data) => {
        let section = document.createElement('section');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
        let h4_2 = document.createElement('h4');

        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');
        
        section.classList.add("card");
        h3.textContent = `${data.description}`;
        img.setAttribute('src',data.image);
        img.setAttribute('alt', `Logo ${data.name}`);        
        
        p1.textContent = `Max Persons: ${data.maxPersons}`;
        h4.textContent = `${data.reservationType[0].descType}`;
        p2.textContent = `${data.reservationType[0].description1}(${data.reservationType[0].time1}) Price: ${data.reservationType[0].price1}`;
        p3.textContent = `${data.reservationType[1].description2} Price: ${data.reservationType[0].price2}`;   
        
        h4_2.textContent = `${data.reservationType[1].descType}`;
        p4.textContent = `${data.reservationType[1].description1}(${data.reservationType[1].time1}) Price: ${data.reservationType[1].price1}`;
        p5.textContent = `${data.reservationType[1].description2} Price: ${data.reservationType[1].price2}`; 


        section.appendChild(h3);
        section.appendChild(img);
        section.appendChild(p1);
        section.appendChild(h4);
        section.appendChild(p2);
        section.appendChild(p3);
        section.appendChild(h4_2);
        section.appendChild(p4);
        section.appendChild(p5);

     
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