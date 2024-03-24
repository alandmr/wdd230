const currDateTime = document.querySelector("#currDateTime");
currDateTime.textContent = Date.now();

const radioButtons = document.querySelectorAll('input[name="memberType"]');

for(const radioButton of radioButtons){
    radioButton.addEventListener('change', showSelected);
}        
        
function showSelected() {            
    if (this.checked) {
        if (this.value === "npmembership"){
            document.querySelector("#npmembershipD").style.display = "block";
            document.querySelector("#bronzems").style.display = "none";
            document.querySelector("#silverms").style.display = "none";
            document.querySelector("#goldms").style.display = "none";
        }

        if (this.value === "bronzemembership"){
            document.querySelector("#npmembershipD").style.display = "none";
            document.querySelector("#bronzems").style.display = "block";
            document.querySelector("#silverms").style.display = "none";
            document.querySelector("#goldms").style.display = "none";
        }

        if (this.value === "silvermembership"){
            document.querySelector("#npmembershipD").style.display = "none";
            document.querySelector("#bronzems").style.display = "none";
            document.querySelector("#silverms").style.display = "block";
            document.querySelector("#goldms").style.display = "none";
        }

        if (this.value === "goldmembership"){
            document.querySelector("#npmembershipD").style.display = "none";
            document.querySelector("#bronzems").style.display = "none";
            document.querySelector("#silverms").style.display = "none";
            document.querySelector("#goldms").style.display = "block";
        }
                
    }
}