let bamt = document.querySelector('#billamt')
let npel = document.querySelector('#peopleamt')
let s1 = document.getElementById('b1')
let s2 = document.getElementById('b2')
let s3 = document.getElementById('b3')
let s4 = document.getElementById('b4')
let s5 = document.getElementById('b5')
let s6 = document.getElementById('b6')

let service = 0;

function b1fuc(){
      service = s1.value
    //   console.log(service)
}
function b2fuc(){
    service = s2.value
    // console.log(service)
}
function b3fuc(){
    service = s3.value
    // console.log(service)
}
function b4fuc(){
    service = s4.value
    // console.log(service)
}
function b5fuc(){
    service = s5.value
    // console.log(service)
}
function b6fuc(){
    service = s6.value
    // console.log(service)
}

let btn = document.querySelector('#calculate')
let wamt = document.querySelector('#h2')
let tamt = document.querySelector('#h3')
bamt.addEventListener('focus', myfuc)
bamt.addEventListener('blur', fuc)
npel.addEventListener('focus', myfuc)
npel.addEventListener('blur', fuc)
function myfuc(){
    bamt.style.color = 'red'
    npel.style.color = 'red'
}
function fuc(){
     bamt.style.color = 'black'
     npel.style.color = 'black'
}
let flag = true
btn.addEventListener('click',Tipamt)
function Tipamt(){
    let v = bamt.value
    let val = service;
    let no = npel.value;
 
    if(v == ""){
        alert('Please Enter Bill Amount')  
    }
    if(v != "" && no != ""){
        let divide = (v * val)/no

        let total = parseFloat(v) + parseFloat(divide)
   
        if(flag === true){
            h2.innerHTML = `<i class="fa-solid fa-dollar-sign"></i> ${divide.toFixed(2)}`
            h3.innerHTML = `<i class="fa-solid fa-dollar-sign"></i> ${total.toFixed(2)}`
            btn.innerHTML = 'Reset'
            flag = false
        }  
        else if(flag === false) {
            h2.innerHTML = `<i class="fa-solid fa-dollar-sign"></i> 0.00`
            h3.innerHTML = `<i class="fa-solid fa-dollar-sign"></i> 0.00`
            btn.innerHTML = 'Calculate'
            bamt.value = ''
            npel.value = ''
            flag = true
        } 
    }

}

