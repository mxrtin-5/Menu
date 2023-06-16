const menu = document.getElementById('menuToggler');
const navegacion = document.getElementById('navegacion');
const lista = document.querySelectorAll('.list')

menu.onclick = () =>{
    navegacion.classList.toggle('open')
}

function activarLink(){
    lista.forEach((item) => {
        item.classList.remove('active');
        this.classList.add('active')
    });
}

lista.forEach((item)=>{
    item.addEventListener('click', activarLink);
})
