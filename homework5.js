// const keys = ['a','s','d','f','j','k','l',';','q','w'];
// let currentKeyIndex = 0;
// const keyDisplay = document.getElementById('key');
// keyDisplay.textContent = keys[currentKeyIndex];
// function showError(message) {
//   PNotify.error({ text: message });
// }
// document.addEventListener('keydown', function(event) {
//   if(event.key === keys[currentKeyIndex]) {
//     currentKeyIndex++;
//     if(currentKeyIndex >= keys.length) {
//       PNotify.success({ text: "Ви виграли! Гра завершена." });
//       currentKeyIndex = 0;
//     }
//     keyDisplay.textContent = keys[currentKeyIndex];
//   } else {
//     showError(`Неправильна клавіша! Натисніть "${keys[currentKeyIndex]}"`);
//   }
// });
// document.addEventListener('keypress', function(event) {
//   event.preventDefault();
// });
// document.getElementById('new-game').addEventListener('click', function() {
//   currentKeyIndex = 0;
//   keyDisplay.textContent = keys[currentKeyIndex];
//   PNotify.info({ text: "Нова гра почалася!" });
// });


// const chartData = {
//   labels: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
//   datasets: [
//     {
//       label: "Продажі за останній місяць",
//       data: [150,220,180,200,250,300,280,350,400,380,420,450,500,550,600,650,700,750,800,850,900,950,1000,1050,1100,1150,1200,1250,1300,1350]
//     }
//   ]
// };
// const ctx = document.getElementById('sales-chart').getContext('2d');
// const salesChart = new Chart(ctx, {
//   type: 'line',
//   data: chartData
// });
