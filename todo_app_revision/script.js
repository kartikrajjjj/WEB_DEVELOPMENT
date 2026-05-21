let todoList=[];
display();


function addTodo(){
    let input=document.querySelector('#textbox');
    let todoItem=input.value;
    todoList.push(todoItem);
    input.value='';
    display();
}

function display(){
    let displayElement=document.querySelector('#todo-items');
    displayElement.innerText='';

    for(let i=0;i<todoList.length;i++){
        displayElement.innerText=displayElement.innerText + "\n"+ todoList[i];
    }
}