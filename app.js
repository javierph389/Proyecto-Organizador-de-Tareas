document.querySelector('#push').onclick = function () {
    if (document.querySelector('#ingresoTarea').value.length == 0) {
        alert('Por favor, agrega una tarea')
    }
    else {
        document.querySelector('#tareas').innerHTML += `
    <div class='tareas'>
        <span id='nombreTarea'>
            ${document.querySelector('#ingresoTarea').value}
        </span>
        <button class='borrar'> Eliminar
            <i class='far fa-trash-alt'></i>
        </button>
    </div>
`;
        let tareasActuales = document.querySelectorAll('.borrar'); //declarar variable que borra variables
        for (let i = 0; i < tareasActuales.length; i++) {
            tareasActuales[i].onclick = function () {
                this.parentNode.remove();
            } //for que va a eliminar cada elemento
        }
    }
    document.querySelector('#ingresoTarea').value = '';
}