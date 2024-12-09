// var Hadir = new Promise((reject,resolve)=>{
//     var test = false

//     if (test) {
//         resolve('Test passed')
//     } else {
//        reject('Test Rejected') 
//     }
// })

// Hadir.then((mahmoud)=>console.log(mahmoud)).catch((safa)=>console.log(safa))


// var Somme = new Promise((reject,resolve)=>{
//     var a = 2
//     var b = undefined
//     var c = a + b

//     if (c) {
//         resolve(c)
//     } else {
//         reject('Could not calculate')
//     }
// })

// Somme.then((resultat)=> console.log(resultat)).catch((error)=>console.log(error))


// const Somme=(a,b)=>{
//     return new Promise((reject,resolve)=>{
//         var sum = a + b

//         if (sum) {
//             resolve(sum)
//         } else {
//             reject('Could not Calculate')
//         }
//     })
// }

// Somme(7,4).then((res)=> console.log(res)).catch((err)=>console.log(err)).finally(()=>console.log("A7la Rania"))


// var sum = 0

// console.log('Hello Rania')

// for (let i = 0; i < 10000000; i++) {
//     sum = sum + i 
// }

// console.log(sum)

// console.log("Bye Rania")


// var mahmoud = new Promise((reject,resolve)=>{
//     var sum = 0

//     for (let i = 0; i < 10000000; i++) {
//         sum = sum + i         
//     }

//     if (sum) {
//         resolve(sum)
//     } else {
//        reject('Could not calculate') 
//     }
// })


// console.log("Hello Rania")

// mahmoud.then((res)=> console.log(res)).catch((err)=>console.log(err))

// console.log('Ri7 essed Rania')

// const testPro=async()=>{
//     try {
//        var res = await mahmoud 
//        console.log(res)
//     } catch (error) {
//         console.log(error)
//     }
// }

// testPro()

// function rr (){
//   setTimeout(()=>console.log('Rania'), 4000)
// }


// rr()

// EXERCICE 1

var attente=()=> new Promise((resolve)=> setTimeout(resolve, 2000))

var t = [2,8,5,9,4]

const iterateWithAsyncAwait=async(tab)=>{
    for (let i = 0; i < tab.length; i++) {       
        console.log(tab[i])
        await attente()
    }
}

iterateWithAsyncAwait(t)