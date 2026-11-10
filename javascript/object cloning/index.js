let src={
    age:12,
    wt:68,
    ht:180

};

let src2={
    value:101,
    name:"love babbar"

}
let dest={};
//cloning using iteration
for(let key in src){
    let newKey=key;
    let newValue= src[key];
    //insert newkey and value in dest and create a clone
    dest[newKey]=newValue;
}









// let dest= Object.assign({},src,src2);//assign


//let dest={...src};//spread operator
//let data=src;

src.age=90;
console.log("src:",src);
console.log("dest:",dest);