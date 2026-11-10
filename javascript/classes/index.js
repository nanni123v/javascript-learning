class human{
    //properties
    age=13;
    #ht=100;
    wt=80;

//behaviour
walking(){
    console.log("i am walking")
}
running(){
    console.log("i am running",this.#ht)
}
get fetchweight(){
    return this.#ht;
}
set modifyheight(val){
    this.#ht=val;
}

}

let obj =new human();
console.log(obj.age);


