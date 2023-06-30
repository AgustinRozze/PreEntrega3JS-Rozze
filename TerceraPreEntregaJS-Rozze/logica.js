console.table(productos);
const carro = [];
let contenedorProds = document.getElementById('misprods');
let tablaBody = document.getElementById('tablabody');

//DOM
function renderizarProductos(listaProds){
    //vaciamos en contenedor para evitar duplicados
    contenedorProds.innerHTML='';
    //cargamos las cartas de los productos solicitados
    for(const prod of listaProds){
        contenedorProds.innerHTML+=`
            <div class="card col-sm-2">
                <img class="card-img-top" src=${prod.foto} alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">$ ${prod.precio}</p>
                    <button id=${prod.id} class="btn btn-primary compra">Comprar</button>
                </div>
            </div>
        `;
    }

    //eventos
    let botones = document.getElementsByClassName('compra');
    for(const boton of botones){
        //opcion 1
        boton.addEventListener('click',()=>{
            //console.log('Hiciste click en el producto con id: '+boton.id);
            const prodACarro = productos.find((producto) => producto.id == boton.id);
            console.log(prodACarro);
            //cargar prods al carro
            agregarACarrito(prodACarro);
        })

        //opcion 2
        boton.onmouseover = () => {
            /* boton.classList.remove('btn-primary');
            boton.classList.add('btn-warning'); */
            boton.classList.replace('btn-primary','btn-warning');
        }
        boton.onmouseout = () => {
            boton.classList.replace('btn-warning','btn-primary');
        }
    }


}

renderizarProductos(productos);

function agregarACarrito(producto){
    carro.push(producto);
    console.table(carro);
    tablaBody.innerHTML += `
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        </tr>
    `;
    //aqui calcular total
}

//eventos de teclado
//onkeyUp onkeyDown
let nombre = document.getElementById('nombre');
nombre.onkeyup=()=>{
    if(nombre.value.length < 3){
        console.log('Nombre de menos de 3 caracteres');
        nombre.style.color='red';
    }else{
        nombre.style.color='black';
    }
}

//onchange
/* nombre.addEventListener('change',()=>{

}) */
nombre.onchange=()=>{
    alert('El nombre se actualizo (cambio)');
}

//evento input
let email = document.getElementById('email');
email.addEventListener('input',()=>{
    if(!email.value.includes('@') || !email.value.includes('.')){
        document.getElementById('mensaje').innerText='🚨 No olvides el @ ni el .';
    }else{
        document.getElementById('mensaje').innerText='';
    }
})

//opcion 3 que viene desde el html
function borrarCampos(){
    nombre.value = '';
    email.value = '';
}

//evento submit
let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', validar);

function validar(ev){
    if((nombre.value=='')||(email.value == '')){
        ev.preventDefault();
        alert('Ingrese nombre o email valido !');
    }
}

//bart
let bart = document.getElementById('bart');
bart.style.position='absolute';
bart.style.top = '10px';
bart.style.left = '10px';

document.addEventListener('keyup', function(event){
    if(event.key == 'ArrowRight'){
        bart.style.left = parseInt(bart.style.left) + 50 + 'px';
    }
    if(event.key == 'ArrowLeft'){
        bart.style.left = parseInt(bart.style.left) - 50 + 'px';
    }
});


