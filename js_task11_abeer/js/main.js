let input = document.querySelector(".add_task input");
let addButton = document.querySelector(".add_task .plus");
let tasksContainer = document.querySelector(".tasks_content");
let noTask = document.querySelector(".no_tasks");
let tasksConunt = document.getElementById("task_count");
let tasksCompleted = document.getElementById("task_completed"); 
let input_new ;
let task_content = document.getElementById("task_content");
let remove_checked = document.getElementById("remove_checked");
const myProgressBar = document.querySelector(".progress");


let textLable;
let newspan;
let deleteBtn;
let editBtn ;
let text;
let delText;
let editText ;
let checkBox;




//add task
addButton.onclick = function(){
    //if input is empty 
    if(input.value === ''){
        //sweet alert
        Swal.fire({
            title: 'enter any task you want to do',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })

    }else{
      //remove no tasks 
      noTask.remove();
      //creat span element 
   newspan = document.createElement("span");
      //create delete btn 
   deleteBtn = document.createElement("span");
       //create edit btn 
   editBtn = document.createElement("span");
       //add text to span ,put inside it the input value that user write it 
   text = document.createTextNode(input.value);
       // add text to del btn 
   delText = document.createTextNode("X");
       // add text to edit btn 
   editText = document.createTextNode('edit');
 
textLable = document.createElement("input"); 
textLable.setAttribute('id','text');
textLable.setAttribute('readonly', true);
textLable.classList.add('text-lable');




checkBox = document.createElement("input");
checkBox.type = "checkbox";
checkBox.classList.add("checkbox");
checkBox.setAttribute('id',1);

//add text to span 
textLable.setAttribute('value', text.textContent);
newspan.classList.add("task_box");
deleteBtn.appendChild(delText);
deleteBtn.classList.add("delete");
editBtn.appendChild(editText);
editBtn.classList.add("edit");

newspan.appendChild(checkBox); 
newspan.appendChild(textLable);
newspan.appendChild(deleteBtn);
newspan.appendChild(editBtn);



//add the task to the container 
tasksContainer.appendChild(newspan);

input.value = '';
  calTasks();
    }

};
document.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
    e.target.parentNode.remove();
    calTasks();
    
    
    }else if(e.target.className == 'edit'){     
      textLable.removeAttribute('readonly');
      textLable.focus();
      editBtn.innerHTML = 'save';
    
    } else{
      textLable.setAttribute('readonly', true);
      editBtn.innerHTML = 'edit';
    }

   if(  e.target.classList.contains('checkbox')){
         textLable.classList.toggle('finished');
          calTasks();
          
          
   }
});
 




//fun to calculate all tasks 
function calTasks(){
 
  tasksConunt.innerHTML = document.getElementById("task_content").children.length;
  tasksCompleted.innerHTML = document.getElementsByClassName("finished").length;

  let count = document.getElementById("task_content").children.length;
  let comp =  document.getElementsByClassName("finished").length;

  if((count == comp) && ( comp> 0)){
  updateProgressBar(myProgressBar, 100,comp,count);
  }else if(comp > count){
    updateProgressBar(myProgressBar, 75 ,comp,count);
  } else if(comp == 0){
    updateProgressBar(myProgressBar, 0,comp,count);
  } else if(comp < count){
    updateProgressBar(myProgressBar, 35,comp,count);
  }
  else{
    updateProgressBar(myProgressBar, 50,comp,count);
  }
 
  
};

remove_checked.onclick = function(){
    const elements = document.getElementsByClassName("finished");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    updateProgressBar(myProgressBar,0 ,10,10);


};

function updateProgressBar(progressBar, value,x ,y) {
  value = Math.round(value);
  x = Math.round(x);
  y = Math.round(y);
  progressBar.querySelector(".progress__fill").style.width = `${value}%`;
  progressBar.querySelector(".progress__text").textContent = `${x}of ${y} tasks done`;
};


 



