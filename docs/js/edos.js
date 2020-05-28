const estados = document.querySelector('#estado');
const municipios = document.querySelector('#municipio');
const inputMunicipio = document.querySelector('#input-municipio');
const form =  document.querySelector('#form-estados');

let btnFlecha = document.querySelectorAll('.icon__form-estados');
let select = document.querySelectorAll('.select__form-estados');

for( let i=0; i < btnFlecha.length; i++ ){
    btnFlecha[i].addEventListener('click', () => {
        if(select[i].size === 0){
            select[i].size = 4;
            btnFlecha[i].style.color="red";
            btnFlecha[i].innerHTML= `<i class="fas fa-times"></i>`;
        }else{
            select[i].size = 0;
            btnFlecha[i].style.color="";
            btnFlecha[i].innerHTML= `<i class="fas fa-chevron-down"></i>`;
        }
        
    })
};
estados.addEventListener('change', () => {
    console.log(estados.value);
});
municipios.addEventListener('change', () => {
    console.log(municipios.value);
});
form.addEventListener('change', () => {
    if(estados.value != "Selecciona tu estado" && municipios.value != "Selecciona tu municipio"){
        document.querySelector('.btn__form-estados').classList.add('on');
    }else{
        document.querySelector('.btn__form-estados').classList.remove('on');
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();
});
let datos = new FormData();
datos.append('estados', 'Mexico')
fetch('https://jizratest.eu5.org/net/php/procesar-estados', {
    method: 'post',
    body: datos
})

.then(res => res.json())
.then(data => {
    for(let estado of data.Mexico){
        addInputEstados(estado);
    };
});

estados.addEventListener('change', () => {
    let estado = document.querySelector("#estado").value;
    // console.log(estado);
    let datos = new FormData();
    datos.append('municipios', estado)
    fetch('https://jizratest.eu5.org/net/php/procesar-estados', {
        method: 'post',
        body: datos
    })

    .then(res => res.json())
    .then(data => {
        // console.log(data);
        inputMunicipio.innerHTML =""
        for(let municipios of data){
            addInputMunicipios(municipios);
        }
        
    });
});



//funciones----------->>>>>>>>>>>>>>>
function addInputEstados(data){
    let inputEstados = document.createElement('option');
    inputEstados.setAttribute('value', data)
    inputEstados.innerHTML = data;
    estados.appendChild(inputEstados);
}
function addInputMunicipios(data){
    let inputMunicipios = document.createElement('option');
    inputMunicipios.setAttribute('value', data)
    inputMunicipios.innerHTML = data;
    inputMunicipio.appendChild(inputMunicipios);
}