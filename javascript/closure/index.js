function outerFunction(){
    let name="babbar";
    function innerFunction(){
        console.log(name);
    }
    return innerFunction;
}
let inner= outerFunction();


inner();