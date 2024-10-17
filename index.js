let counter = 0;

const getData = () => {
    // get data from api call or somthing 

    console.log("Fetahcing Data.......", counter++);
}

const callMethodWithDelay = (fn,delay) => {

    let timer;

    return function (...args) {
         clearTimeout(timer);
        timer =  setTimeout(()=>{
            fn.apply(this,args);
         },delay)
    }
}

const optimized = callMethodWithDelay(getData, 300);



const throtfunc = (fn,d) => {
    let timer;
    return function (...args){
    
        document.getElementById("Buttonn").disabled = true;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this,args);
        },d)
    }
}
const throt = throtfunc(()=>{
console.log("Button Clicked");
document.getElementById("Buttonn").disabled = false;

},1000)