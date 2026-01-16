// 1  const delayedPromise = (value, delay) =>{
//   return new Promise(resolve =>{
//     setTimeout(() =>{
//       resolve(value);
//     }, delay);
//   });
// };
// const promises = [
//   delayedPromise('First', 1000),
//   delayedPromise('Second', 2000),
//   delayedPromise('Third', 500),
//   delayedPromise('Fourth', 1500),
//   delayedPromise('Fifth', 3000)
// ];
// Promise.all(promises)
//   .then(results =>{
//     console.log(results);
//   })
//   .catch(error =>{
//     console.error(error);
//   });
//  2   const randomDelay = (value) =>{
//   const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
//   return new Promise(resolve =>{
//     setTimeout(() =>{
//       resolve(value);
//     }, delay);
//   });
// };
// const racePromises = [
//   randomDelay('Runner 1'),
//   randomDelay('Runner 2'),
//   randomDelay('Runner 3'),
//   randomDelay('Runner 4'),
//   randomDelay('Runner 5')
// ];
// Promise.race(racePromises)
//   .then(winner =>{
//     console.log(`The winner is: ${winner}`);
//   })
//   .catch(error =>{
//     console.error(error);
//   });