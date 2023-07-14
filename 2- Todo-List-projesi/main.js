const todoEkleFormu = document.querySelector("#todoEkleFormu");
const todoEklemeInput = document.querySelector("#todoEklemeInput");
const todoEkleButonu = document.querySelector("#todoEkleButon");
const todoListesiFormu = document.querySelector("#todoListesiFormu");
const todoListesi = document.querySelector("#todoListesi");
const todolariSilButonu = document.querySelector("#todoSilButonu");
let todos = [];

todoEkleButonu.addEventListener("click", todoEkle);
todoListesi.addEventListener("click", todoSil);
todolariSilButonu.addEventListener("click", tumTodolariSil);
window.addEventListener("load", function () {
    sayfaYenilendi();
});


function todoEkle() {
    const girilenTodo = todoEklemeInput.value.trim();
    if (girilenTodo !== "") {
        arayuzeEkleme(girilenTodo);
        localStorageEkleme(girilenTodo);
        todoEklemeInput.value = ""
    } else {
        uyariVer("danger", "Lütfen bir todo yazın!")
    }
}


function arayuzeEkleme(girilenTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const silButonu = document.createElement("button");
    const icon = document.createElement("i");

    li.textContent = girilenTodo;
    li.classList.add("list-item");

    silButonu.className = "delete-button";
    silButonu.appendChild(icon);
    icon.className = "fa fa-trash";

    li.appendChild(span);
    li.appendChild(silButonu);
    todoListesi.appendChild(li);
}



function localStorageEkleme(girilenTodo) {
    storageControl();
    if (storageControl().length !== 0) {
        todos.push(girilenTodo);
        localStorage.setItem("todos", JSON.stringify(todos));
    } else {
        todos = [girilenTodo];
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}

function tumTodolariSil() {
    if (todoListesi.innerHTML == "") {
        uyariVer("danger", "Silinecek todo yok!");
    } else {
        todoListesi.innerHTML = "";
        todos = []
        localStorage.setItem("todos",JSON.stringify(todos));
    }
}
function storageControl() {
    let todoVarMi = localStorage.getItem("todos");
    if (todoVarMi !== null) {
        todos = JSON.parse(todoVarMi);
        return todos;
    } else {
        return todos;
    }
}

function sayfaYenilendi() {
    storageControl();
    if (storageControl().length !== 0) {
        todos.forEach(todo => arayuzeEkleme(todo));
    }
}


let aktifUyarilar = [];

function uyariVer(uyariTuru, uyariMesaji) {
    const uyariDiv = document.createElement("div");
    uyariDiv.className = `alert alert-${uyariTuru}`;
    uyariDiv.setAttribute("role", "alert");
    const uyariMetni = document.createTextNode(uyariMesaji);
    uyariDiv.appendChild(uyariMetni);

    if (aktifUyarilar.length > 0) {
        return;
    }

    aktifUyarilar.push(uyariDiv);
    todoEkleFormu.appendChild(uyariDiv);

    setTimeout(() => {
        uyariDiv.remove();
        aktifUyarilar = [];
    }, 1500);
}

function todoSil(e) {
    if (e.target.className = "fa fa-trash") {
        const silinecekTodo = e.target.parentElement;
        silinecekTodo.remove()
        storageControl()
        todos.forEach(function(todo,index){
            if(silinecekTodo.textContent === todo){
                todos.splice(index,1)
            }
        })
        localStorage.setItem("todos",JSON.stringify(todos))
        
    }
}