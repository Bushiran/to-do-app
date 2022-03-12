//variables
const todoInput = document.querySelector("#todo-input")
const addBtn = document.querySelector("#add-btn")
const todolist = document.querySelector("ul")

let todoArray = new se();
let user;

const addTodo = () => {

if(todoArray.size != 5){
        if(todoInput.value != ""){
            todoInput.parentElement.classList.remove("error")
            todoArray.add(todoInput.value)

            if(user){
                let db = [...todoArray]  //spreads the content of todoArray
                let _db = (JSON.stringify(db))  ///_db is the string form of c
                localStorage.setItem(user, _db)
                setTodo(todoArray)
                               }else {
                                   setTodo(todoArray)
                               }

        }else {
            todoInput.parentElement.classList.add("error")
        }
        todoInput.value = ''
    }else {
        alert('you have five things to do')
    }

}
//event handlers
addBtn.addEventListener('click, addtodo')

const setTodo = (arr) => {
    let htmlArr = '';

    for(el of arr){
        let html =
    `<li id=${el}>
    <div class ="todo">
    <p>${el}</p>
    <input type="text" class="hide"/>
    </div>

    <div class ="btns">
    <button>save</button>
    <button><Delete/button>
    </div>
    </li>`
htmlArr += html
     }
     todolist.innerHTML =htmlArr
     //informText
}
