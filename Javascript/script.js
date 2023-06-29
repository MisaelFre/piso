var largura=document.querySelector('#larg')
var altura=document.querySelector('#altu')
var area=document.querySelector('#resp')
var piso1=document.querySelector('#piso')
var arga=document.querySelector('#arga')
var orca=document.querySelector('#orca')
var resposta=document.querySelector('#nao')

var rp=document.querySelector('#rp')
var ra=document.querySelector('#ra')
var sa=document.querySelector('#saco')
var vt=document.querySelector('#vt')




function resp(){
    area.innerHTML=(parseFloat(larg.value)) * (parseFloat(altu.value))*1.2
    rp.innerHTML=((parseFloat(larg.value)) * parseFloat(altu.value)) * parseFloat(piso.value)*1.2
    ra.innerHTML=(((parseFloat(larg.value)) * (parseFloat(altu.value)) * (parseFloat(arga.value)*1.2)/4)) 
    sa.innerHTML= ((parseFloat(larg.value)) * (parseFloat(altu.value)*1.2)/4)
    vt.innerHTML=(((parseFloat(larg.value)) * (parseFloat(altu.value)) * (parseFloat(piso.value))*1.2) + (((parseFloat(larg.value)) * parseFloat(altu.value)) * (parseFloat(arga.value)*1.2)/4))
    resposta.innerHTML='Valor Suficiente' 
}

function resp2(){
    area.innerHTML=(parseFloat(larg.value)) * (parseFloat(altu.value))*1.2
    rp.innerHTML=((parseFloat(larg.value)) * parseFloat(altu.value)) * parseFloat(piso.value)*1.2
    ra.innerHTML=(((parseFloat(larg.value)) * (parseFloat(altu.value)) * (parseFloat(arga.value)*1.2)/4)) 
    sa.innerHTML= ((parseFloat(larg.value)) * (parseFloat(altu.value)*1.2)/4)
    vt.innerHTML=(((parseFloat(larg.value)) * (parseFloat(altu.value)) * (parseFloat(piso.value))*1.2) + (((parseFloat(larg.value)) * parseFloat(altu.value)) * (parseFloat(arga.value)*1.2)/4))
    resposta.innerHTML='Valor Insuficiente'   
}


function test(){
    if (parseFloat(((parseFloat(larg.value)) * (parseFloat(altu.value)) * (parseFloat(piso.value))*1.2) + (((parseFloat(larg.value)) * parseFloat(altu.value)) * (parseFloat(arga.value)*1.2)/4)) < parseFloat(orca.value)){
        resp()
    }else{
        resp2()
    }
}










