class parent{
    constructor(){
        console.log("Parent Class Constructor")
    }
}
class Child extends parent{
    constructor(){
        super();
        console.log("Child Class Constructor")
    }
}
new Child()