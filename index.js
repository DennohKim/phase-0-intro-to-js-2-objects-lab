// Write your solution in this file!
// function destructivelyUpdateObject(obj, key, value) {
//     obj[key] = value; //Why are we using bracket notation here?
  
//     return obj;
//   }


// function nondestructivelyUpdateObject(obj, key, value) {
//     const newObj = { ...obj };
  
//     newObj[key] = value;
  
//     return newObj;
//   }
const employee = {
    name: 'Dennis',
    streetAddress: '10 Broadway'

}  
   
// beforeEach();

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employees = {...employee}
    employees[key] = value
    return employees
}

updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = 'Sam'
    employee.streetAddress = '12 Broadway'
    const employees = {...employee}
    employees[key] = value
    return employees
}

console.log(destructivelyUpdateEmployeeWithKeyAndValue());

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee}
    delete newEmployee.name
    delete newEmployee.streetAddress
    // console.log(newEmployee)
    return newEmployee
    
}

deleteFromEmployeeByKey(employee, 'name');

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    let newEmployee = employee
    delete newEmployee.name
    delete newEmployee.streetAddress

    return employee
}

destructivelyDeleteFromEmployeeByKey(employee, 'name')

