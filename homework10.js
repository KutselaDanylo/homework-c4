//    1       let count = 0;
//     const interval = setInterval(() =>{
//         count++;
//         console.log("Message " + count);
//         if (count === 5){
//             clearInterval(interval);
//             console.log("Stopped.");
//         }
//     }, 1000);



// 2         const box = document.getElementById('box');
//     let pos = 0;
//     let size = 50;
//     setInterval(() =>{
//         pos += 2;
//         size += 1;
//         box.style.left = pos + "px";
//         box.style.width = size + "px";
//     }, 100);



    // 3   let score = 0;
    // let timeLeft = 10;
    // const btn = document.getElementById('clickMe');
    // btn.onclick = () =>{
    //     score++;
    //     document.getElementById('score').innerText = score;
    // }
    // const gameInterval = setInterval(() =>{
    //     timeLeft--;
    //     document.getElementById('timer').innerText = timeLeft;
    //     if (timeLeft <= 0){
    //         clearInterval(gameInterval);
    //         btn.disabled = true;
    //         alert(" Your score: " + score);
    //     }
    // }, 1000);
    //     4     document.getElementById('startBtn').onclick = () =>{
    //     const sec = document.getElementById('seconds').value;
    //     const ms = sec * 1000;
    //     setTimeout(() =>{
    //         alert("Time is up! " + sec + " seconds passed.");
    //     }, ms);
    // };