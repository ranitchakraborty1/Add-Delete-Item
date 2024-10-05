const name = document.getElementById('name');
const profession = document.getElementById('profession');
const age = document.getElementById('age');
const submitBtn = document.getElementById('submit');
const employeeList = document.getElementById('employee-list');
const messege = document.getElementById('messege');
  
function addEmployee(e) {
    e.preventDefault();
    messege.style.display="none";

    // Validate input fields
    if (name.value === '' || profession.value === '' || age.value === '') {
        //alert('Error: Please make sure all fields are filled before adding in an employee !');
        messege.innerText = "Error: Please make sure all fields are filled before adding in an employee !"
        messege.style.color ="red"
        messege.style.display= "block"
        return;
    }

  // Create new row
  const row = document.createElement('ul');

  // Insert columns
  row.innerHTML = `
       <li>
       <div>
      <span>Name: ${name.value}</span>
      <span>Profession: ${profession.value}</span>
      <span>Age: ${age.value}</span>
      </div>
      <button class="btn-sm delete">Delete User</button>
      </li>
     
  `;
  // Append row to employee list
  employeeList.appendChild(row);

  messege.innerText="Success: Employee Added!"
  messege.style.color="green"
  messege.style.display="block"


  // Clear input fields
  name.value = '';
  profession.value = '';
  age.value = '';
}


// Function to delete a employee from the table
function deleteEmployee(e) {
    if (e.target.classList.contains('delete')) {
       // if (confirm('Are you sure you want to delete this employee?')) {
            const row = e.target.parentElement.parentElement;
            employeeList.removeChild(row);
      //}  
    }
}

// Event listeners
submitBtn.addEventListener('click', addEmployee);
employeeList.addEventListener('click', deleteEmployee);


