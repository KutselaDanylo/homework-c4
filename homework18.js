const BASE_URL = 'http://localhost:3000/students';
const refs ={
  getBtn: document.getElementById('get-students-btn'),
  tableBody: document.querySelector('#students-table tbody'),
  form: document.getElementById('add-student-form'),
};
refs.getBtn.addEventListener('click', getStudents);
refs.form.addEventListener('submit', addStudent);
async function getStudents(){
  try{
    const response = await fetch(BASE_URL);
    const students = await response.json();
    renderStudents(students);
  } catch (error){
    console.error(error);
  }
}
function renderStudents(students){
  refs.tableBody.innerHTML = students.map(student => `
    <tr>
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.course}</td>
      <td>${Array.isArray(student.skills) ? student.skills.join(', ') : student.skills}</td>
      <td>${student.email}</td>
      <td>${student.isEnrolled ? 'Active' : 'Inactive'}</td>
      <td>
        <button onclick="updateStudent(${student.id})">Update</button>
        <button onclick="deleteStudent(${student.id})" style="background-color: #dc3545">Delete</button>
      </td>
    </tr>
  `).join('');
}
async function addStudent(e){
  e.preventDefault();
  const newStudent ={
    name: document.getElementById('name').value,
    age: Number(document.getElementById('age').value),
    course: document.getElementById('course').value,
    skills: document.getElementById('skills').value.split(',').map(s => s.trim()),
    email: document.getElementById('email').value,
    isEnrolled: document.getElementById('isEnrolled').checked,
  };
  try{
    await fetch(BASE_URL,{
      method: 'POST',
      headers:{ 'Content-Type': 'application/json' },
      body: JSON.stringify(newStudent),
    });
    refs.form.reset();
    getStudents();
  } catch (error){
    console.error(error);
  }
}
async function updateStudent(id){
  const newName = prompt("Enter new name:");
  if (!newName) return;
  try{
    await fetch(`${BASE_URL}/${id}`,{
      method: 'PATCH',
      headers:{ 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName }),
    });
    getStudents();
  } catch (error){
    console.error(error);
  }
}
async function deleteStudent(id){
  if (!confirm("Are you sure?")) return;
  try{
    await fetch(`${BASE_URL}/${id}`,{
      method: 'DELETE',
    });
    getStudents();
  } catch (error){
    console.error(error);
  }
}