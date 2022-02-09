function clicar(){
 let num = document.querySelector('#txtn1')
 let sel = document.querySelector('#tabuada')

 if (num.value.length == 0){
    window.alert('Por favor, digite um numero')
}else{
 let n = Number(num.value)
 let c = 1
 sel.innerHTML= ''
 while (c <= 10){
    let item = document.createElement('option')
    item.text = `${n} x ${c} = ${n * c}`
    sel.appendChild(item)
    c++

 }
        
   
 }
}