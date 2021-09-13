// Vazifa. Yugurishga chiqamizmi?

// - havo harorati 5 va 30 daraja orasida bo'lsa, yugurishga chiqamiz
// - yomg'ir yog'ayotgan bo'lsa, yugurishga chiqmaymiz
// - yomg'ir yog'ayotgan bo'lsa-yu, lekin zal ochiq bo'lsa, yugurishga chiqamiz
// - havo harorati 5 dan past bo'lsa, zal ochiq bo'lsa ham yugurishga chiqmaymiz

// Natijaga ko'ra "Ha"ga mos holatda "Ha" so'zi yashil rangda bo'lishi, "Yo'q"ga mos natija bo'lsa, "Yo'q" so'zi qizil rangda bo'lishi kerak

const elForm=document.getElementById('form');
const elInput=document.getElementById('input');
const elText=document.querySelector('.text');
const eltrue=document.getElementById('true');
const elfalse=document.getElementById('false');
const elrain=document.querySelector('.rain');
const elhall=document.querySelector('.hall')

elForm.addEventListener('keyup',function(){
    
    if(elInput.value>=5 && elInput.value<=30){
        eltrue.classList.add('true');
    }
    if(elrain.checked && elInput.value>=5 && elInput.value<=30){
        eltrue.classList.add('true');
        elfalse.classList.remove('false');
    }
    if(elhall.checked && elrain.checked && elInput.value>=5 && elInput.value<=30){
        eltrue.classList.add('true');
        elfalse.classList.remove('false');
    }
    if(elInput.value<5 && elhall.checked){
        elfalse.classList.remove('false');
        eltrue.classList.add('true');
       
    }
    else{
        elfalse.classList.add('false');
        eltrue.classList.remove('true');
    }
    
})