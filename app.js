var list  = document.getElementById("list");
function addTodo(){
    var todoitem = document.getElementById("todo-item");
    // CREATE LI AND TEXT NODE:
    var li = document.createElement("li");
    var liText = document.createTextNode(todoitem.value);
    li.appendChild(liText);
    list.appendChild(li)
    todoitem.value = "" 

    // CREATE DELETE BUTTON:
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    delBtn.setAttribute("class","btn1");
    delBtn.setAttribute("onclick","deleteItem(this)");
    delBtn.appendChild(delText);
    li.appendChild(delBtn);
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.appendChild(editText);
    editBtn.setAttribute("class","btn2 " );
    li.appendChild(editBtn)

}
// CREATE DELETE BUTTON:
function deleteItem(e){
    e.parentNode.remove();
}
// CREATE DELETE ALL BUTTON:
function deleteAll(){
    var deleteAll = document.getElementById("list");
    list.innerHTML = "";
}

// FUNCITON FOR EDIT BUTTON
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter the edited value" , val );
    e.parentNode.firstChild.nodeValue = editValue


} 
