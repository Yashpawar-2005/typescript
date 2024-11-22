let x:number=1;
console.log(x)
//the rootdir is where the ts files be there 
//
//let x:type=3 gives type but if x=3 there is autounderstanding of the value x as number

//write function greet user given there first name
function output(params:string) {
    console.log("hello "+params +" hi")
}
output("yash")

//return a value from the function
function sum(a:number, b:number):number{
return a+b
}
console.log(sum(2,3))

//function as number
function delayedfun(fn:()=>void){
    setTimeout(fn,1000);
}
delayedfun(function(){
    console.log("hih")
})
interface usertype{
    firstname:string,
    secondname:string,
    age:number
}
function useinterface(user:usertype){
    if(user.age>18)console.log("above age")
}
const userdata:usertype={
    firstname:"hi",
    secondname:"heelo",
    age:23
}
useinterface(userdata)

interface adress{
    city:string,
    counter:number,
}


interface u{
    name:string,
    age:number,
    address?:adress
}
interface office{
    address:adress
}
let userr:u={
    name:"yash",
    age:45   
}

let userrr:u={
    name:"yash",
    age:456,
    address:{
        city:"pune",
        counter:5
    }
}

console.log(userr)
console.log(userrr)


//creating class implementing the interface

interface people{
    name:string,
    age:number,
    greet():string
}
class yash implements people{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name,
        this.age=age
    }
    greet = function(): string {
        return "hi";
    }
}
let used=new yash("yash",29)
console.log(used.greet())

//difference between interface and abstract class we can directly give implementation of 
//some function in abstract class but in interface it cannot.


//difference between type and interface
//we can't implement a type like interface
//we can't do unions and intersection in interface
type User={
    name:string,
    iseven:()=>boolean
}
type student={
    name:string,
    class:number
}
type lead=User&student
type long=User | student
let e:student={
    name:"yas",
    class:34,
}
let u:User={
    name:"fom",
    iseven() {
        return true
    },
}

let l:lead={
    name:"yash",
    class:4,
    iseven() {
        return true
    },
}


//create 2 types user and admin 
//create a function takes eithere a user or a admin as an input
interface Admin{
    name:string,
}
interface Userd{
    name:string,
    class:number
}

type UserOrAdmin=User |Admin
function greet(user:UserOrAdmin){
    console.log("hi")
}

function maxval(arr:number[]){
    let num:number=0
    for (let index = 0; index < arr.length; index++) {
        if( arr[index]>num){
            num=arr[index];
        }
    }
    return num
}
console.log(maxval([1,2,3,4,5,2,9]))


interface practice{
    firstname:string,
    lastname:string,
    age:number
}


 function legalage(arr:practice[]):practice[]{
    let newarr:practice[]=arr.filter(element=>element.age>18);
    return newarr
    }

    console.log(legalage([{firstname:"yash",lastname:"pawar",age:24},{firstname:"yash",lastname:"pawar",age:2},{firstname:"yash",lastname:"pawar",age:10}]))


    //advance typescritp api's
    interface Userindatabase{
        id:string,
        name:string,
        class:number,
        password:string,
        email:string
    }
    //now i need to update a user so i need some part of the above interface so i use pick
    type updateuser=Pick<Userindatabase,'name'|'class'|'email'>
    function update(us:updateuser) {
        //hit the databse for update
    }

    //partial marks all the values in a type or interface as optional
    type updatepropoptional=Partial<updateuser>
    function partialupdate(us:updatepropoptional){
        //hover over updateproportial to know the type
    }
    

    //applying conatant value inside a object
    type Usage={
        readonly name:string,
        readonly age:number
    }
    const vari:Usage={
        name:"yash",
        age:34
    }
    // var.name="omg"
    // typescript shows an error but if i just create a object weather in ts or js and change its
    //inner value it won't complain as it dosen't change the refernce it changes the value
    const checkingreference:any={
        name:"ysh",
        class:12
    }
    checkingreference.name="omg"//won't give an error dispite the checkingrefernce being const because i change the value not the reference