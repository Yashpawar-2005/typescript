interface User2{
    id:string,
    name:string
}
//cleaner way to do this is by record
// type Users ={[key:string]:User2}
type Users =Record<string,User2>

const users:Users={
    "yash":{
        id:"yashid",
        name:"yash"
    },
    "yashh":{
        id:"yashhid",
        name:"yashh"
    }
}
type Eventwork ='click'|'scroll'|'mousemove';
type ExcludeEvent=Exclude<Eventwork,'scroll'>
const fun =(event:ExcludeEvent)=>{
console.log(event)
}