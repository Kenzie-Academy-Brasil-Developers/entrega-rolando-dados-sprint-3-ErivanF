const lista=document.getElementById('Lista')
const frequencia = [0,0,0,0,0,0,0,0,0,0,0]
for(let i=0;i<1000;i++){
    let roll = rolaDado()+rolaDado()
    frequencia[roll-2]+=1
}
let maiorFrequencia=0
for (let i=0; i<frequencia.length; i++){
    if(frequencia[i]>maiorFrequencia){
        maiorFrequencia=frequencia[i]
    }
}
const frequenciaNormal=[]//armazena a frequência em porcentagem da maior frequência
for(let i=0;i<frequencia.length;i++){
    let porcentagem=frequencia[i]*100/maiorFrequencia
    frequenciaNormal.push(porcentagem+'%')
}
for(let i=0;i<frequencia.length;i++){
    lista.appendChild(criarElemento(i+2,frequencia[i],frequenciaNormal[i]))
}

function criarElemento(indice,n,tamanho){
    const item=document.createElement('li')
    const ind=document.createElement('span')
    ind.innerText=indice
    const barra=document.createElement('div')
    barra.innerText=n
    barra.style.width=tamanho
    item.appendChild(ind)
    item.appendChild(barra)
    return item
}
function rekt(comp){//cria e retorna uma div com um determinado comprimento
    const rect=document.createElement('div')
    rect.style.width = comp
    return rect 
}
function rolaDado(){
    res = Math.floor(1+Math.random()*6)
    return res
}