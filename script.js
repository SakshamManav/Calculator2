let btns = document.querySelectorAll(".btn");
let clearBtn = document.querySelector(".clearBtn");
let equalBtn = document.querySelector(".equal");
let solution = document.querySelector(".soln");
solution.innerHTML = "";
let realValue = "";

btns.forEach((btn) => {

  btn.onclick = () => {
    realValue += btn.value;
    solution.innerHTML += btn.innerHTML;
  };

  equalBtn.onclick = () => {
    let answer = eval(realValue);
    solution.innerHTML = answer;
    realValue = answer;
    btn.onclick=()=>{
        console.log(btn.value);
        if(btn.value!=="+" && btn.value !=="-" && btn.value !== "*" && btn.value !== "/"){
            realValue = "";
            solution.innerHTML="";
            solution.innerHTML = btn.value;
        }
    }
  };
 
});


clearBtn.onclick = () => {
    realValue = "";
    solution.innerHTML = "";
  };

 
