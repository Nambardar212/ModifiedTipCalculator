let bamt = document.querySelector('#billamt')
let npel = document.querySelector('#peopleamt')
let s1 = document.getElementById('b1')
let s2 = document.getElementById('b2')
let s3 = document.getElementById('b3')
let s4 = document.getElementById('b4')
let s5 = document.getElementById('b5')
let s6 = document.getElementById('b6')

let service = 0;
s1.addEventListener('click', b1fuc)
function b1fuc(){
    s2.classList.remove('shakti')
    s3.classList.remove('shakti')
    s4.classList.remove('shakti')
    s5.classList.remove('shakti')
    s6.classList.remove('shakti')
      s1.classList.add("shakti");
      service = s1.value
    
    //   console.log(service)
}

function b2fuc(){ 
    service = s2.value
    s1.classList.remove('shakti')
    s6.classList.remove('shakti')
    s3.classList.remove('shakti')
    s4.classList.remove('shakti')
    s5.classList.remove('shakti')
    s2.classList.add('shakti')
    // console.log(service)
}
function b3fuc(){
    s1.classList.remove('shakti')
    s2.classList.remove('shakti')
    s3.classList.add('shakti')
    s4.classList.remove('shakti')
    s5.classList.remove('shakti')
    s6.classList.remove('shakti')
    service = s3.value
    // console.log(service)
}
function b4fuc(){
    s1.classList.remove('shakti')
    s2.classList.remove('shakti')
    s4.classList.add('shakti')
    s3.classList.remove('shakti')
    s5.classList.remove('shakti')
    s6.classList.remove('shakti')
    service = s4.value
    // console.log(service)
}
function b5fuc(){
    s1.classList.remove('shakti')
    s2.classList.remove('shakti')
    s5.classList.add('shakti')
    s4.classList.remove('shakti')
    s3.classList.remove('shakti')
    s6.classList.remove('shakti')
    service = s5.value
    // console.log(service)
}
function b6fuc(){
    s1.classList.remove('shakti')
    s2.classList.remove('shakti')
    s6.classList.add('shakti')
    s4.classList.remove('shakti')
    s5.classList.remove('shakti')
    s3.classList.remove('shakti')
    service = s6.value
    // console.log(service)
}

let btn = document.querySelector('#calculate')
let h2 = document.querySelector('#h2')
let h3 = document.querySelector('#h3')
let h4 = document.querySelector('#h4')
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
    let v = 0;
    if(bamt.value > 0) v = bamt.value;
    let val = service;
    let no = 0;
    if(npel.value > 0) no = npel.value;
 
    if(v == ""){
        alert('Please Enter Bill Amount')  
        return
    }
    if(no == ""){
        alert('Please Enter Valid Number of People')  
        return
    }
    if(v != "" && no != ""){
        let divide = (parseFloat(v) * parseFloat(val))/parseFloat(no)
        let d = parseFloat(v)/parseFloat(no);
        let total2 = parseFloat(v) * parseFloat(val);
        let totalAmount = parseFloat(total2) + parseFloat(v);
        let total1 = parseFloat(d) + parseFloat(divide)
   
        if(flag === true){
            h2.innerHTML = `<i class="fa-solid fa-dollar-sign"></i> ${divide.toFixed(2)}`
            h3.innerHTML = `<i class="fa-solid fa-dollar-sign"></i> ${total1.toFixed(2)}`
            h4.innerHTML = `<i class="fa-solid fa-dollar-sign"></i> ${totalAmount.toFixed(2)}`
            btn.innerHTML = 'Reset'
            flag = false
        }  
        else if(flag === false) {
            h2.innerHTML = `<i class="fa-solid fa-dollar-sign"></i> 0.00`
            h3.innerHTML = `<i class="fa-solid fa-dollar-sign"></i> 0.00`
            h4.innerHTML = `<i class="fa-solid fa-dollar-sign"></i> 0.00`
            btn.innerHTML = 'Calculate'
            bamt.value = ''
            npel.value = ''
            flag = true
            service = 0;
            s1.classList.remove('shakti')
            s2.classList.remove('shakti')
            s3.classList.remove('shakti')
            s4.classList.remove('shakti')
            s5.classList.remove('shakti')
            s6.classList.remove('shakti')
        } 
    }

}

