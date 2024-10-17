 const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("P1 Sucess"),3000)
 })
 const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=> reject("P2 failed"),1000)
 })
 const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("P3 Sucess"),2000)
 })

 Promise.all([p1,p2,p3])
 .then((res)=>{
    console.log(res);
 }).catch((err)=>{
    console.error(err);
 });


 // promise.allSettled will give a array of object with status and value
 Promise.allSettled([p1,p2,p3]).then((res)=>{
    console.log(res);
 }).catch((err)=>{
    console.error(err);
 });
Promise.race([p1,p2,p3]).then((res)=>{
    console.log(res);
 }).catch((err)=>{
    console.error(err);
 });
 Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res);
 }).catch((err)=>{
    console.error(err);
 });