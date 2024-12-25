const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, skills: 'JS' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000,  skills: 'JS'},
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, skills: '' },
      //... More employee records can be added here
    ];

     // Function to display all employees
     function displayEmployees() {
        const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = totalEmployees;
  
     }

     function calculateTotalSalaries() {
        const total = employees.reduce((acc, x) => acc += x.salary, 0)
        alert(`Total Salaries: $${total}`);
        return  total
     }

     function displayHREmployees() {
        const result = employees.filter((el) => el.department == 'HR')
        const display = result.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = display;
     }

     function findEmployeeById(id){
        let rez = employees.find((el) => el.id == id)
        
        if (rez) {
            document.getElementById('employeesDetails').innerHTML =`<p>${rez.id}: ${rez.name}: ${rez.name} - ${rez.department} - $${rez.salary}</p>`;
            }
            else{
              document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
            }
     }

     function findEmployeeBySkill(skill){
        let rez = employees.filter((el) => el.skills == skill);
        const display = rez.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = display;
     }