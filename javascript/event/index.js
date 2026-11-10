// function changeText(event){
//     console.log(event)
//     let fpara = document.getElementById('fpara');

//     fpara.textContent="babbar"
// }
// let fpara = document.getElementById('fpara');
 
// // fpara.addEventListener('click',function(){
// //     let fpara = document.getElementById('fpara');
// //     fpara.textContent="babbar"
// // });

// fpara.addEventListener('click',changeText);
// // fpara.removeEventListener('click',changeText)


// let anchorElement= document.getElementById('fanchor');
// anchorElement.addEventListener('click',function(event){
//     event.preventListener();
//     anchorElement.textContent="click done bhai"
// });


// let paras=document.querySelectorAll('p');
// for(let i=0;i<paras.length;i++){
//     let para =paras[i];
//     para.addEventListener('click',function(){
//         alert("You have Clicked on para:"+(i+1));
//     })
// }



function alertPara(event){
    alert("you have clicked on para:"+event.target.textContenet);

}
 let mydiv = document.getElementById('wrapper');
 document.addEventListener('click',alertPara);










