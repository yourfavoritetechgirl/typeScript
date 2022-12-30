abstract class A 
{
    constructor()
    {
        console.log("A class ")
    }
    abc(){
        console.log("ABC method...!")
    }
    abstract xyz();
}
class B extends A  {
    constructor()
    {
        console.log("B class ")
        super();
    }
    xyz(){}
}

var b = new B();
b.abc();
