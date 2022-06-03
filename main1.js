const taskInput = document.querySelector("#item");
const p = document.querySelector("p");
const taskBox = document.querySelector(".taskBox");

//    getting todo list from local storage
let todos = JSON.parse(localStorage.getItem ("todo-list"));


// let todos = "";
// todos = JSON.parse(localStorage.getItem ("todo-list"));


function showTodo(){
    itemsLeft();

    let li ="";
    if(todos){
         todos.forEach((todo, id) =>{
             let isCompleted = todo.status === "Completed" ? "checked" : "";
        
        li += ` 
                <li class="box" id="boxdark">
                  
                <label for="${id}">
                <input type="checkbox" onclick="updateStatus(this)" id="${id}" ${isCompleted}>
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
    


function deleteTask(deleteId){
    // deleteId.preventDefault;
    if(todos[deleteId].status !== "Completed"){
        console.log("it was checked");
    itemsLeft();

    }
    todos.splice(deleteId, 1);
    localStorage.setItem("todo-list" , JSON.stringify(todos));
    showTodo();
    // itemsLeft();

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
//  itemsLeft();

}

function itemsLeft(){
   let complete= document.querySelectorAll(".checked").length;
   let all= document.querySelectorAll(".box").length;
   let left = all-complete;
   let span = document.querySelector("#remain");
   span.textContent= left;
}

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
       showTodo();
       


  
  
   }
   else if(e.key == "Enter" && !userTask){
    p.textContent= "Enter a chore";
   }
})
