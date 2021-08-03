
// Funcion para agregar informaciòn al Storage.

const addStorage = () =>{
    const contacto = {
        id: Math.random(1, 100),
        nombre: nombre.value,
        apellido: apellido.value,
        tel: tel.value,
    }
    localStorage.setItem(contacto.id, JSON.stringify(contacto))
    window.location = `/agenda_video/index.html`
}


/*La cuestion ahora seria agarrar la key del local para luego
tener ese objeto y sus valores asi luego crear los spans para 
el html. ES IMPROTANTE QUE ESTA FUNCIONALIDAD SE HAGA SIEMPRE QUE
EL CODIGO SE EJECUTE, PUES SIEMPRE DEBE OCURRIR HASTA CUANDO
RECARGAMOS LA PAGINA PARA LOS SPANS YA EN EN HTML.*/

/*
    <span class="span__style nombre">Alexander</span>
    <span class="span__style apellido">Bazàn</span>
    <span class="span__style telefono">11-4386-7196</span>
    <span class="deleted">X</span>
*/ 

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


// BGColor
