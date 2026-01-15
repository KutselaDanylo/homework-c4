// const form = document.getElementById('form');
// const list = document.getElementById('list');
// const btn = document.getElementById('btn');
// const idx = document.getElementById('index');
// let data = JSON.parse(localStorage.getItem('contacts')) || [];
// function show(){
//     list.innerHTML = '';
//     data.forEach((c, i) =>{
//         list.innerHTML += `
//             <div class="item">
//                 <div>${c.f} ${c.l} - ${c.p} - ${c.e}</div>
//                 <div class="btns">
//                     <button onclick="edit(${i})">Edit</button>
//                     <button onclick="del(${i})">Delete</button>
//                 </div>
//             </div>`;
//     });
// }
// form.onsubmit = (e) =>{
//     e.preventDefault();
//     const contact ={
//         f: document.getElementById('fn').value,
//         l: document.getElementById('ln').value,
//         p: document.getElementById('ph').value,
//         e: document.getElementById('em').value
//     };
//     if (idx.value === ""){
//         data.push(contact);
//     } else{
//         data[idx.value] = contact;
//         idx.value = "";
//         btn.innerText = "Add";
//     }
//     localStorage.setItem('contacts', JSON.stringify(data));
//     form.reset();
//     show();
// };
// window.del = (i) =>{
//     data.splice(i, 1);
//     localStorage.setItem('contacts', JSON.stringify(data));
//     show();
// };
// window.edit = (i) =>{
//     const c = data[i];
//     document.getElementById('fn').value = c.f;
//     document.getElementById('ln').value = c.l;
//     document.getElementById('ph').value = c.p;
//     document.getElementById('em').value = c.e;
//     idx.value = i;
//     btn.innerText = "Update";
// };
// show();