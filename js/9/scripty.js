// function Myday (wokeup,cb) {
//     console.log('Start the day')
//     setTimeout(() => {
//         if (wokeup) cb(null, 'прокинувся')
//         else cb('не прокинувся',null)
//     }, 500)
// }
// // /////////////////////////////////////////////////////////////////
// function morning(eat,cb) {
//     setTimeout(()=> {
//         console.log('йду снідати')},279)
//     setTimeout(() => {
//         if (!eat) {
//             cb('Нема що кушач', null)
//         } else {
//             cb(null,'Є що кушач')
//         }
//     },750)
// }
// // ///////////////////////////////////////////////////////////////////
// function clean_teeth(Toothpaste,cb){
//     setTimeout(() =>{
//         console.log('Йду в ванну')},314)
//
//     setTimeout(()=>{
//         if (!Toothpaste) cb('О ні закінчилась',null)
//         else{cb(null,'чищу зуби щоб були здорові')}
//     },1000)
// }
// // /////////////////////////////////////////////////////////////
// function get_dresserd(clothes,cb){
//     setTimeout(()=>{
//         console.log('Йду вдягатися')
//     },299)
//     setTimeout(()=> {
//         if (!clothes) cb('Немає одягу - повернусь в ліжко',null)
//         else{cb(null,'Вдягаюся')
//         }
//     },444)
// }
// // ///////////////////////////////////////////////////////////////////
// function goingtostup(maska,cb){
//     setTimeout(()=>{
//         console.log('Йду на зупинку')
//     },155)
//     setTimeout(()=>{
//         if (!maska) cb('Ляяя я знову забув маску - повертаюся', null)
//         else {
//             cb(null, 'Чекаю маршрутку')
//         }
//     },345)
// }
// // //////////////////////////////////////////////////////////////////////
// function bus(seat,cb) {
//     setTimeout(() => {
//         console.log('Приїхала маршрутка')
//     },199)
//     setTimeout(() => {
//         if (!seat)cb('Лише сидячі місця - чекаю наступну', null)
//         else {cb('їду в бурсу')}
//     },299)
// }
// // /////////////////////////////////////////////////////////////////////////
// function byrsa(karantyn,cb){
//     setTimeout(() => {
//             console.log('Вже біля бурси')
//         }, 199)
//         setTimeout(() => {
//             if (!karantyn) cb('Заходжу в бурсу и вчуся', null)
//             else {cb(null, 'Зараз ж карантин - повертаюся')
//                 }
//         }, 299)
//     }
// ///////////////////////////////////////////////////////////////////
// Myday(1,(err,data)=>{
//     if (err){
//         console.log(`сумно ${err}`)
//     }else {
//         console.log(`Я ${data}`)
//    morning(1,(err,data)=>{
//         if (err){
//             console.log(`${err} - помираю`)
//         }else{
//             console.log(`${data} - снідаю`)
//             clean_teeth(1,(err,data)=>{
//                 if (err) console.log(`${err} - прийдеться помирати`)
//                 else{
//                     console.log(data)
//                 get_dresserd(1,(err,data)=>{
//                     if (err) console.log(err)
//                     else{
//                         console.log(data)
//                     goingtostup(1,(err,data)=>{
//                         if (err) console.log(err)
//                         else {
//                             console.log(data)
//                         bus(1,(err,data)=>{
//                             if (err) console.log(err)
//                             else {
//                                 console.log(data)
//                             palitex(0,(err,data)=>{
//                                 if (err) console.log(err)
//                                 else console.log(data)
//                             })
//                             }
//                             })
//                         }
//                         })
//                     }
//                 })
//                 }
//             })
//         }
//
//     })
// }
// })
// /////////////////////////////////////Promis/////////////////////
//
// function Myday1(wokeup) {
//         return new Promise((resolve,reject) => {
//             console.log('Start the day')
//             setTimeout(() => {
//                 if (wokeup) resolve(' Я прокинувся')
//                 else reject('Сумно не прокинувся')
//             }, 500)
//         })}
// //         ///////////////
// function morning1(eat){
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log('Йду снідати')}, 279)
//             setTimeout(() => {
//                 if (!eat) {
//                     reject('Нема що кушач')
//                 } else {
//                     resolve('Є що кушац')
//                 }
//             }, 750)
//         })}
// //     ///////////////////////////////////////////////
// function clean_teeth1(Toothpaste){
//         return new Promise((resolve,reject) =>{
//             setTimeout(()=>{
//                 console.log('Йду вдуш')},314)
//
//             setTimeout(()=>{
//             if (!Toothpaste) reject('О ні закінчилась')
//             else {resolve('Чищу зубки щоб були здорові')}
//         },1000)
//         })
//         }
// //         ////////////////////////////////////
// function get_dresserd1(clothes) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//
//         }, 299)
//         setTimeout(() => {
//             if (!clothes) reject('Немає одягу - повернуся в ліжко')
//             else {
//                 resolve('Вдягатися')
//             }
//         }, 444)
//     })}
// //     ////////////////////////////
// function goingtostuo1(maska){
//         return new Promise((resolve, reject) => {
//
//         setTimeout(()=>{
//             console.log('Йду на зупинку')
//         },155)
//             setTimeout(()=>{
//             if (!maska) reject('Ля знову забув мвску повертаюся')
//             else {
//             resolve('Чекаю маршрутку')
//         }
//         },345)
// })}
// // //////////////////////////////////////////
// function bus1(seat){
//         return new Promise((resolve, reject) => {
//
//
//         setTimeout(()=>{
//             console.log('Приїхала маршрутка')
//         },199)
//             setTimeout(()=>{
//             if (!seat)reject('Лише сидячі місця - чекаю настуну')
//             else {resolve('Їду в бурсу')}
//         },299)
//         })}
// // //////////////////////////////////////
// function byrsa1(karantyn){
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log('Вже біля бурси')
//             }, 199)
//             setTimeout(() => {
//                 if (!karantyn) reject('Заходжу в бурсу і вчуся')
//                 else {
//                     resolve('Зараз ж карантин - повертаюся')
//                 }
//             }, 299)
//         })}
//
// ////////////////
// Myday1(1).then(value => {
//     console.log(value)
// return morning1(1)
// }).then(value => {
//     console.log(value)
// return clean_teeth1(1)
// }).then(value => {
//     console.log(value)
// return get_dresserd1(1)
// }).then(value => {
//     console.log(value)
// return goingtostuo1(1)
// }).then(value => {
//     console.log(value)
//     return bus1(1)
// }).then(value => {
//     console.log(value)
//     return byrsa1(1)
// }).then(value => {
//     console.log(value)
// }).catch(reason => {
//     console.log(reason)
//     })


//!!!!!!!!!!!!!!!!!!!!!!!!!!асинк авейт!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//

function Myday1(wokeup){
    return new Promise(((resolve, reject) => {
        console.log('Start the day')
        setTimeout(()=>{
            if (wokeup) resolve('Я прокинувся')
            else reject ('Сумно не прокинувся')
        },500)
    }))
}
function morning1(eat){
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            console.log('Йду снідати')
        },279)
        setTimeout(()=>{
            if (!eat) {
                reject('Нема що кушац')
            } else {
                resolve('Є що кушац')
            }
        },750)
    }))
}
function clean_teeth1(Toohpaste){
    return new Promise(((resolve, reject) => {
        setTimeout(()=> {
            console.log('Йду в ванну')
        },314)
        setTimeout(()=> {
            if (!Toohpaste) reject('О ні закінчилася')
            else{resolve('Чищу зубкищоб були здороі')}
        },1000)
    }))
}
function get_dresserd1(clothes){
    return new Promise(((resolve, reject) => {
        setTimeout(()=> {
            console.log('Йду вдягатись')
        },299)
        setTimeout(()=> {
            if (!clothes) reject('Немає одягу - повернусь в ліжко')
            else {resolve('Вдягаюсь')
            }
        },444)
    }))
}
function goingtostup1(maska){
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            console.log('Йду на зупинку')
        },155)
        setTimeout(()=>{
            if (!maska) reject('Ляяя знову забув маску - повертаюсь')
            else {
                resolve('Чекаю маршрутку')
            }
        },345)
    }))
}
function bus1(seat){
    return new Promise(((resolve, reject) => {
        setTimeout(()=> {
            console.log('Приїхала маршрутка')
        },199)
        setTimeout(()=> {
            if (!seat)reject('Лише сидячі місця - чекаю наступну')
            else {resolve('Їду в бурсу')}
        },299)
    }))
}
function byrsa1(karantyn){
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            console.log('Вже біля бурси')
        },199)
        setTimeout(()=> {
            if (!karantyn) reject('Заходжу в бурсу і вчуся')
            else {resolve('Зараз ж карантин - повертаюсь')}
        },299)
    }))
}
async function sdad(){
    const wokeup = await Myday1(1)
    console.log(wokeup)
    const eat = await morning1(1)
    console.log(eat)
    const Toothpaste = await clean_teeth1(1)
    console.log(Toothpaste)
    const clothes = await get_dresserd1(1)
    console.log(clothes)
    const maska = await goingtostup1(1)
    console.log(maska)
    const seat = await bus1(1)
    console.log(seat)
    const karantyn = await bus1(1)
    console.log(karantyn)
}
sdad().catch((err)=>{
    console.log(err)
})