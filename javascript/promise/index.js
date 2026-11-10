// let firstPromise = new Promise((resolve, reject)=>{
//     setTimeout(function sayMyName(){
//         console.log("my name is love babbar");
//     },15000);
//     resolve(1);
// });






// let promise1 = new Promise((resolve,reject)=>{
//     let success = false;
//     if(success){
//         resolve("promise fullfiled");
//     }
//     else{
//         reject("promise rejected");
//     }
// });
// promise1.then((message)=>{
//     console.log("then ka message is"+message);
// }).catch((error)=>{
//     console.log("error"+error);
// })






let promise1 = new Promise((resolve,reject)=> {
    setTimeout(resolve,1000,"first");
})

let promise2 = new Promise((resolve,reject)=> {
    setTimeout(resolve,2000,"second");
})

let promise3= new Promise((resolve,reject)=> {
    setTimeout(resolve,4000,"third");
})
Promise.all([promise1,promise2,promise3])
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.error("error"+error);
})










