const hamButton = document.querySelector('#hamburgerMenu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

let currDate = new Date();
document.querySelector("#updated").textContent = "Last modification: "+currDate.toLocaleString();
document.querySelector("#year").textContent = "© "+currDate.getFullYear()+" .:|:. Aland D. Muñoz .:|:. Barcelona - Venezuela";

const btnExplore = document.querySelector(".hero-butto");

if (btnExplore != null){
	btnExplore.addEventListener("click",() =>{
		window.location.href = "rentals.html";
		
	})
}