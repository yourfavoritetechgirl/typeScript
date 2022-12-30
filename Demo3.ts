class Demo3
{
    constructor(id:any,name:string,age:number,salary:number,desig:string,pan?:string)
    {
        console.log("ID is :" + id);
        console.log("Name is : "+ name);
        console.log("Age is : "+age);
        console.log("Salary is : "+ salary);
        console.log("Designation is : "+desig);
        console.log("Pan :"+pan);
    }
}

var d3= new Demo3(100, "Thanesh",25,500000,"Dev","XYZ");
console.log("=====================================");

var d3= new Demo3(500, "Ramesh",25,500000,"Dev","XYZ555");