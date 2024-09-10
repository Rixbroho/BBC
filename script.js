// document.getElementById('menu').addEventListener('click',()=>{
//     document.querySelector('nav').classList.toggle('active');
//     document.querySelector('#menu').classList.toggle('off');
//     document.querySelector('.close').classList.toggle('off');
// });
let ok=document.querySelectorAll('.ok');
ok.forEach((don)=>{
    don.addEventListener('click',()=>{
        console.log(don)
        document.querySelector('nav').classList.toggle('active');
        document.querySelector('#menu').classList.toggle('off');
        document.querySelector('.close').classList.toggle('off');
        document.querySelector('html').classList.toggle('active');
    });
});

document.querySelector('nav::after').addEventListener('click',()=>{
    document.querySelector('nav').classList.toggle('active');
    document.querySelector('#menu').classList.toggle('off');
    document.querySelector('.close').classList.toggle('off');
    document.querySelector('html').classList.toggle('active');
});
 
document.querySelector('.other .button').addEventListener('click',()=>{
    document.querySelector('.desc').classList.toggle('off');
})
