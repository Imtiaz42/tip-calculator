const billAmount = document.getElementById("bill");
const peoples = document.getElementById("peoples");
var perPersonTip = document.querySelector(".per-person-tip");
var perPersonTotal = document.querySelector(".per-person-total");
const btn = document.querySelector(".btn-first");

const buttons = document.querySelectorAll(".percentage");
var zero = document.querySelector(".zero");


buttons.forEach((button) => button.addEventListener("click", (e) => {
    let billAmountValue = billAmount.value;
    let poeplesNumber = peoples.value;

     peoples.addEventListener("keydown", () =>{

        if(poeplesNumber === ""){

            btn.classList.remove("btn-second");
            btn.classList.add("btn-first");

        }else{
            btn.classList.remove("btn-first");
            btn.classList.add("btn-second");

        }

    });

//     if(poeplesNumber === ""){
// btn.classList.remove("btn-second");
// btn.classList.add("btn")
//     }

//     else{
//         btn.classList.add("btn-second");
//         btn.classList.remove("btn")
//     }


   if(poeplesNumber === ""){
       zero.style.display = "block";
    }
    else{
        zero.style.display = "none";
        let percentage = billAmountValue/100*e.target.value/poeplesNumber;
       // let fixedPercentage =  percentage.toFixed(2);
       perPersonTip.innerHTML =  percentage.toFixed(2);

    let peronsAmount = billAmountValue/poeplesNumber+percentage;
    perPersonTotal.innerHTML = peronsAmount.toFixed(2);
 

    }

}))


