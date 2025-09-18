// creamos las constantes globales para loselementos principales globales son cuando estan afuera de las funciones

const input = document.getElementById('to-do-input');
const addBtn = document.getElementById('add-btn');
const toDoList = document.getElementById('cont-to-do-list');
const completedList = document.getElementById('cont-to-do-completed');

// Creamos la funcion que nos permite crear una nueva tarea a partir del formulario
//Toda etiqueta que vamos a crear es a partir de la etiqueta html ya existente

function createToDoItem(textoItem){
    //Creamos el nodo o elemento padre o contenedor
    const item = document.createElement('div');
        item.classList.add('item-to-do');

    //Creamos el nodo hijo del input y leagregamos el type checkbox
    const checkbox = document.createElement('input');
        checkbox.type = 'checkbox'

    //Creamos el siguiente nodo hijo parrafo, A este parrafo le
    //asigno el valor del argumento de la funcion es decir lo que escribe el usuario en el campo
    const p = document.createElement('p');
        p.textContent = textoItem

    //Creamos el ultimo nodo hijo, el boton de eliminar
    const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'x'

    //Ensamblamos dentro del nodo padre sus nodos hijos, es decir la estructura de la tarea
    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);
    //Utilizamos el return para dar respuesta al elemento creado ya que lo vamos a usar mas adelante
    return item;
}

// Detectamos el evento click con un evento de escucha, sobre el boton + 
//Para que a partir de ese evento se agregue la tarea dentro del contenedor
addBtn.addEventListener('click', () => {
    const textoItem = input.value.trim()
    if (textoItem == "") {
        alert("No se puede crear una tarea vacia");
    } else {
        const newItem = createToDoItem(textoItem);
        toDoList.appendChild(newItem);
        input.value = "";
    }
});

//L asiguiente funcion nos permitira agregar el funcionamiento principal sobre las tareas

