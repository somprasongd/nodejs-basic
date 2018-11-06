console.log('Start');

// // callback
// const fetchData = callback => {
//   setTimeout(() => {
//     callback('Done!');
//   }, 1000);
// }

// setTimeout(() => {
//   console.log('Timer is done!');
//   fetchData(text => {
//     console.log(text);
//   })
// }, 2000);

// promise
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 2000);
  });
  return promise;
  
}

// setTimeout(() => {
//   console.log('Timer is done!');
//   fetchData()
//     .then(text => {
//       console.log(text);
//       return fetchData();
//     })
//     .then(text2 => {
//       console.log(text2);      
//     });
// }, 2000);

setTimeout(async () => {
  console.log('Timer is done!');
  const text = await fetchData();
  console.log(text);
  const text2 = await fetchData();
  console.log(text2);
}, 2000);

console.log('End');
