let currDate = new Date();
document.querySelector("#updated").textContent = "Last modification: "+currDate.toLocaleString();
document.querySelector("#year").textContent = "© "+currDate.getFullYear()+" .:|:. Aland D. Muñoz .:|:. Barcelona - Venezuela";

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});