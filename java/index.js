"use strict";
let x = 1;
console.log(x);
//the rootdir is where the ts files be there 
//
//let x:type=3 gives type but if x=3 there is autounderstanding of the value x as number
//write function greet user given there first name
function output(params) {
    console.log("hello " + params + " hi");
}
output("yash");
//return a value from the function
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
//function as number
function delayedfun(fn) {
    setTimeout(fn, 1000);
}
delayedfun(function () {
    console.log("hih");
});
function useinterface(user) {
    if (user.age > 18)
        console.log("above age");
}
const userdata = {
    firstname: "hi",
    secondname: "heelo",
    age: 23
};
useinterface(userdata);
let userr = {
    name: "yash",
    age: 45
};
let userrr = {
    name: "yash",
    age: 456,
    address: {
        city: "pune",
        counter: 5
    }
};
console.log(userr);
console.log(userrr);
class yash {
    constructor(name, age) {
        this.greet = function () {
            return "hi";
        };
        this.name = name,
            this.age = age;
    }
}
let used = new yash("yash", 29);
console.log(used.greet());
let e = {
    name: "yas",
    class: 34,
};
let u = {
    name: "fom",
    iseven() {
        return true;
    },
};
let l = {
    name: "yash",
    class: 4,
    iseven() {
        return true;
    },
};
function greet(user) {
    console.log("hi");
}
function maxval(arr) {
    let num = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > num) {
            num = arr[index];
        }
    }
    return num;
}
console.log(maxval([1, 2, 3, 4, 5, 2, 9]));
function legalage(arr) {
    let newarr = arr.filter(element => element.age > 18);
    return newarr;
}
console.log(legalage([{ firstname: "yash", lastname: "pawar", age: 24 }, { firstname: "yash", lastname: "pawar", age: 2 }, { firstname: "yash", lastname: "pawar", age: 10 }]));
function update(us) {
    //hit the databse for update
}
function partialupdate(us) {
    //hover over updateproportial to know the type
}
const vari = {
    name: "yash",
    age: 34
};
// var.name="omg"
// typescript shows an error but if i just create a object weather in ts or js and change its
//inner value it won't complain as it dosen't change the refernce it changes the value
const checkingreference = {
    name: "ysh",
    class: 12
};
checkingreference.name = "omg"; //won't give an error dispite the checkingrefernce being const because i change the value not the reference
