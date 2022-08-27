const taskInput = document.querySelector("#item");
const p = document.querySelector("p");
const taskBox = document.querySelector(".taskBox");
const filters = document.querySelectorAll(".footerall p");
const clearC = document.querySelector("#clear");
const toggle = document.querySelector(".image-toggle-sun");
const box= document.querySelector(".box");



//    getting todo list from local storage
let todos = JSON.parse(localStorage.getItem ("todo-list"));


// let todos = "";
// todos = JSON.parse(localStorage.getItem ("todo-list"));

// filters.forEach(btn =>{
//     btn.addEventListener('click' , () => {
//         showTodo(btn.id);
//     });
// });
function clear(){
    todos.forEach(one =>{
        if(one.status == "Completed"){
            // todos.splice(one.id, 1);
            // one.remove();
            localStorage.setItem("todo-list" , JSON.stringify(todos));
            showTodo();
            console.log(one);
        }
    })
    // console.log("aaa");

}
// clearC.addEventListener('click' , clear);


function showTodo(){
    // itemsLeft();
    

    let li ="";
    if(todos){
         todos.forEach((todo, id) =>{
           
            
            
                li += ` 
                <li class="box" id="boxdark">
                  
                <label for="${id}">
                <input type="checkbox" onclick="updateStatus(this)" id="${id}" >
                <p class="TD">${todo.name}</p>
                </label>
                <button class="remove" onclick="deleteTask(${id})"></button>
                
               
                </li>
                 `
                 
             
        
        
    })
    }
    taskBox.innerHTML= li;
    // itemsLeft();
}
showTodo();
// span.textContent= document.querySelectorAll(".box").length; 
    

function checked(){
    
}

function deleteTask(deleteId){
    // deleteId.preventDefault;
    // if(todos[deleteId].status !== "Completed"){
    //     console.log("it was checked");
    // }
    todos.splice(deleteId, 1);
    localStorage.setItem("todo-list" , JSON.stringify(todos));
    showTodo();
  

}

function updateStatus(selectedTask){
 let taskName= selectedTask.parentElement.lastElementChild;
 if(selectedTask.checked){
     taskName.classList.add("checked");
    //  updating the status of the selected task to complete
     todos[selectedTask.id].status="Completed";
 }
 else{
    taskName.classList.remove ("checked");
    //  updating the status of the selected task to Active
    todos[selectedTask.id].status="Active";
 }
 localStorage.setItem("todo-list" , JSON.stringify(todos));


}

// function itemsLeft(){
//    let complete= document.querySelectorAll(".checked").length;
//    let all= document.querySelectorAll(".box").length;
//    let left = all-complete;
//    let span = document.querySelector("#remain");
//    span.textContent= left;
// }

taskInput.addEventListener("keyup" , e =>{
   let userTask= taskInput.value.trim();
   if(e.key == "Enter" && userTask){
       p.textContent= "";
       taskInput.value="";
    
       if(!todos){
           todos= [] ;
       }
       let taskInfo= {name: userTask , status: "Active"};
       todos.push(taskInfo); // adding new task to todos array
       localStorage.setItem("todo-list" , JSON.stringify(todos));
       showTodo("All");
       


  
  
   }
   else if(e.key == "Enter" && !userTask){
    p.textContent= "Enter a chore";
   }
})


toggle.addEventListener('click' , () =>{
    
    // taskInput.style.backgroundColor="yellow";
    console.log("clicked");
    if(toggle.getAttribute("id")== "dark1"){
        console.log("this is dark theme");
        // box.id="boxlight";
        box.setAttribute('id','boxlight');
        toggle.id="light1";
        
    }
    else if(toggle.getAttribute("id")== "light1"){
        console.log("this is light theme");
        // toggle.setAttribute("id" , "dark1");
        // box.id="boxdark";
        toggle.id="dark1";
    }

   

})



   