
// api
const API = 'https://randomuser.me/api/?results=9';

// for leader
// const overlay = document.getElementById('overlay');


// const getInfo = (resource) => {
//     return new Promise((resolve, reject) => {

//         const request = new XMLHttpRequest();
//         request.addEventListener('readystatechange', () => {

//              if (request.readyState == 4 && request.status == 200){
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             }
//         })
//         request.open('Get', resource);

//         request.send();
//     })
// }


const reload = async () =>{
    const request = await fetch(API);
    const data =  await request.json();
    getData(data)
    return data
}



document.addEventListener('DOMContentLoaded', reLoad)