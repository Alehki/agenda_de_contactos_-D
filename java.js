

const nombre = document.getElementById(`nombre`)
const apellido = document.getElementById(`apellido`)
const tel = document.getElementById(`telefono`)
const btn = document.getElementById(`add`)
const list = document.getElementById(`grand__list`)






// Funcion para agregar informaciòn al Storage.

const addStorage = () =>{
    const contacto = {
        id: Math.random(1, 100),
        nombre: nombre.value,
        apellido: apellido.value,
        tel: tel.value,
    }
    localStorage.setItem(contacto.id, JSON.stringify(contacto))
    window.location = `index.html`
}
// -----------------------------------------------------


// obtener keys del Storage.

const getStorage = () =>{
    let valores = Object.keys(localStorage)

    for(key of valores){
        const contact = JSON.parse(localStorage.getItem(key))
        
        const div = document.createElement(`div`)

        const span1 = document.createElement(`span`)
        const span2 = document.createElement(`span`)
        const span3 = document.createElement(`span`)
        const span4 = document.createElement(`span`)

        span1.textContent = contact.nombre
        span2.textContent = contact.apellido
        span3.textContent = contact.tel
        span4.textContent = `X`

        span1.classList.add(`span__style`)
        span2.classList.add(`span__style`)
        span3.classList.add(`span__style`)
        span4.classList.add(`deleted`)

        div.classList.add(`list`, `container`)
        div.appendChild(span1)
        div.appendChild(span2)
        div.appendChild(span3)
        div.appendChild(span4)

        list.appendChild(div)

        span4.addEventListener(`click`, ()=>{
            list.removeChild(div)
            localStorage.removeItem(contact.id)
        })
    }
}
// --------------------------------------------------------------------

btn.addEventListener(`click`, () =>{
    if(nombre.value=="" || apellido.value=="" || tel.value==""){
        alert(`Error, no a insertado todos los datos obligatorios`)
    }else addStorage()
    
})


getStorage()

// -------------------------------------
// Estilo extra.

const btnStyle = document.getElementById(`estilo`)


btnStyle.addEventListener(`click`, ()=>{
    const color = document.getElementById(`color`)
    switch(btnStyle.value){
        case `Estilo gris`: (color.classList.remove(`color`), btnStyle.value= `Estilo gris oscuro`)
        break;
        case `Estilo gris oscuro`: (color.classList.add(`color`), btnStyle.value= `Estilo gris`)
    }
})




// const title__list = document.getElementById(`titlte__list`)

// if(!list.firstElementChild){
//     const h2 = document.createElement(`h2`)
//     h2.textContent = `No se encontrò ningùn contacto en la lista`
//     list.appendChild(h2)
// }else{
//     list.removeChild(h2)
// }
