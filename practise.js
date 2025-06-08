
// //creating promises on
// const myPromise = new Promise((resolve, reject) =>{
//   let success =  true;
//   if(success){
//     resolve('The operation was successful')
//   }else {
//     reject('the operation failed')
//   }
// });

// myPromise

// .then((mesage) =>{
//   console.log(mesage)
// })

// .catch((error) =>{
//   console.log(error)
// })

// const fs = require('fs').promises;

// fs.readFile('example.txt', 'utf8')

// .then((data) =>{
//   console.log(date);
// })

// .catch((error) =>{
//   console.error('error reading file:', error)
// })

// async function myAsyncFunction () {
//   let success = true;

//   if (success){
//     return 'The operation was successful!';
//   }else{
//     throw new Error('The operation failed!')
//   }
  
// }

// async function executeAsyncFunction() {
//   try{
//     const result = await myAsyncFunction();
//     console.log(result)
//   }catch (error) {
//     console.error(error.message)
//   }  
// }

// executeAsyncFunction();


// const axios = require('axios');
// const { title } = require('process');
// axios.get('https://jsonplaceholder.typicode.com/todos/1')
// // axios.get('https://api.example.com/data')

// .then(response =>{
//   console.log(response.data)
// })

// .catch(error =>{
//   console.error('Error fetching data', error)
// })


// const data ={
//   name : 'john doe',
//   age : 30
// }

// axios.post('https://api.example.com/users', data)

// .then(response =>{
//   console.log('user created', response.data);
// })

// .catch(error =>{
//   console.error('error creating user:', error)
// })


// async function postDate() {
//   try {
//     let response = await axios.post('https://jsonplaceholder.tryicode.com/posts', {
//       title : 'foo',
//       body : 'bar',
//       userId : 1
//     }) 
//     console.log(response.data)
//   } catch (error) {
//     console.error("Error posting data:", error)
//   }  
// }

// postData;



// fetch('https://jsonplaceholder.typicode.com/todos/1')
fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(json => console.log(json))