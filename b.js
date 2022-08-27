const item = document.querySelector("#item");
const itemm = document.querySelector(".o");
const ul = document.querySelector("ul");
const p = document.querySelector("p");
const btn = document.querySelector("button");
btn.style.display="none";
const bgimage= document.querySelector("#dark");
const toggle= document.querySelector(".image-toggle-sun");
const bgcolor = document.querySelector(".body-dark");
const footer = document.querySelector(".footer");
const body= document.querySelector("body");
const box = document.querySelectorAll(".box");
const remain = document.querySelector("#remain");




let counter = 0;
let remainder = "";

// function for the to do list items
const newTD = function(){
    if(item.value === ''){
        p.textContent= "Enter a chore";
     }
    else{
       p.textContent= "";
       const list = document.createElement("li");
       list.textContent= item.value;
       item.value ='';
       const div = document.createElement("div");
       div.setAttribute("class" , "box");
          if(bgimage.getAttribute("id")=== "dark"){
             div.setAttribute("id", "boxdark");
            }
          else if(bgimage.getAttribute("id")=== "light"){
          div.setAttribute("id", "boxlight"); 
           }
       const butt = document.createElement("button");
       butt.setAttribute("class", "remove");
       butt.style.opacity="0";
       const checkbox  = document.createElement('input');
       checkbox.type = 'checkbox';
       checkbox.className="check";


    //    function to calculate remaining items that havent been checked
     function calculateRem(){
      remainder= document.querySelectorAll(".check").length - counter;
      remain.textContent= remainder;
     }

    //  function to update the remaining items
     checkbox.addEventListener('change' , (e) =>{
      if(checkbox.checked){
          counter++;
      }
      else{
        counter--; 
      }
          
      calculateRem();

       })
   
    remainder= document.querySelectorAll(".check").length - counter + 1;
    remain.textContent= remainder;

   
    // event function for the remove button
    // hover effect
   div.addEventListener("mouseover", function() {
    butt.style.opacity = "1";
  });

   div.addEventListener("mouseout", function() {
    butt.style.opacity = "0";
   })

   // remove function
   butt.addEventListener('click', () =>{
    div.parentNode.removeChild(div);
    if(!checkbox.checked){
    calculateRem();
      }
    else if(checkbox.checked){
     counter--;
     calculateRem();
      }
     })



//    event function for dark and light theme for the to do box
   toggle.addEventListener("click", () =>{

   if(bgimage.getAttribute("id")=== "dark"){
      div.setAttribute("id", "boxdark");
   }
   else if(bgimage.getAttribute("id")=== "light"){
    div.setAttribute("id", "boxlight"); 
   }

   });
  
   
 // adding to do box to the body of the document
   div.appendChild(checkbox);
   div.appendChild(list);
   div.appendChild(butt);
   ul.appendChild(div);
  }
}

btn.addEventListener('click' , newTD);

 item.addEventListener('keydown',  event =>{
    if (event.key === "Enter") {
        btn.click();
  
    }
  }
  );


  //  function for the themes of the rest of the page
  toggle.addEventListener("click", () =>{
   
        if(bgimage.getAttribute("id")=== "dark"){
            bgimage.setAttribute("src", "images/bg-desktop-light.jpg");
            toggle.setAttribute("src", "images/icon-moon.svg");
            bgcolor.style.backgroundColor="hsl(236, 33%, 92%)";
            item.className="light";
            footer.id="FL";
            bgimage.id="light";
            body.style.backgroundColor="hsl(236, 33%, 92%)";
        }
        else{
            bgimage.setAttribute("src", "images/bg-desktop-dark.jpg");
            toggle.setAttribute("src", "images/icon-sun.svg");
            bgcolor.style.backgroundColor="hsl(235, 21%, 11%)";
            item.className="dark";
            footer.id="FD";
            bgimage.id="dark";
            body.style.backgroundColor="hsl(235, 21%, 11%)";

        }
    })

