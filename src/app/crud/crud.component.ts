import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  @ViewChild('content',{static:true}) content: any;
  
  isAdded = false;
  isDeleted = false;
  openModal = false;

  //Data Source for CRUD
  employees = [

    {
       code: 101,
       name: "Employee 1",
       email: "employee1@gmail.com",
       post: "Developer",
       salary: 10000
    },

    {
      code: 102,
      name: "Employee 2",
      email: "employee2@gmail.com",
      post: "Designer",
      salary: 20000
    },
   
    {
        code: 103,
        name: "Employee 2",
        email: "employee3@gmail.com",
        post: "Tester",
        salary: 30000
    },
    {
      code: 104,
      name: "Employee 3",
      email: "employee4@gmail.com",
      post: "Tester",
      salary: 300002
  },
  {
    code: 105,
    name: "Employee 5",
    email: "employee5@gmail.com",
    post: "devop",
    salary: 50000
  },
  {
    code: 106,
    name: "Employee 1",
    email: "employee1@gmail.com",
    post: "Developer",
    salary: 10000
 },

 {
   code: 107,
   name: "Employee 2",
   email: "employee2@gmail.com",
   post: "Designer",
   salary: 20000
 },

 {
     code: 108,
     name: "Employee8",
     email: "employee3@gmail.com",
     post: "Tester",
     salary: 30000
 },
 {
   code: 109,
   name: "Employee9",
   email: "employee9@gmail.com",
   post: "Tester",
   salary: 300002
},
{
 code: 110,
 name: "Employee10",
 email: "employee10@gmail.com",
 post: "devop",
 salary: 50000
},
    
  ];

  //empCode = this.getHighestEmployeeCode() + 1;
  empName = "";
  empEmail = "";
  empPost = "";
  empSalary = "";

  empCodeEdit = "";
  empNameEdit = "";
  empEmailEdit = "";
  empPostEdit = "";
  empSalaryEdit = "";

  editIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  //Event Handler : on click of Add button
  addEmployee(){

      console.log("Add Employee Button CLicked!");
    
      //Generate Code to insert;
      let code = this._getHighestEmployeeCode() + 1;

      //1. Create an object to push
      let emp = {

        code: code,
        name: this.empName,
        email: this.empEmail,
        post: this.empPost,
        salary: Number(this.empSalary)
      };
      console.log(emp);

      //2. Puch Object in employees
      this.employees.push(emp);
      console.log("Employee Added Sussfully!");

      this.isAdded = true;
      //this.empCode = this.getHighestEmployeeCode() + 1;

      
      this.clearForm();
  }

  //Event Handler : on click of delete link
  deleteEmployee(index){

      console.log("delete clicked at " + index);

      this.employees.splice(index,1);
      console.log("Employee at " + index + " Deleted Succesfully!");
      
      this.isDeleted = true;
  }

  editEmployee(emp, index){

    console.log("Edit Clicked");

    this.empCodeEdit   = emp.code;
    this.empNameEdit   = emp.name;
    this.empEmailEdit  = emp.email;
    this.empPostEdit   = emp.post;
    this.empSalaryEdit = emp.salary;

    this.editIndex = index;
  }

  updateEmployee(){

    console.log("Update Employee Button CLicked!");
  
    //1. Create an object to push
    let emp = {
      code: Number(this.empCodeEdit),
      name: this.empNameEdit,
      email: this.empEmailEdit,
      post: this.empPostEdit,
      salary: Number(this.empSalaryEdit)
    };
    console.log(emp);

    //2. PuSh Object in employees
    this.employees[this.editIndex] = emp;

    console.log("Employee Updated Sussfully!");

    this.isAdded = true;
    //this.empCode = this.getHighestEmployeeCode() + 1;

    this.clearForm();
}


  //Function : to get code of last employee 
  _getHighestEmployeeCode(){

    let len = this.employees.length;
    return this.employees[len-1].code;
  }

  //Function : to clear all form fields
  
  clearForm(){

    this.empName = "";
    this.empEmail = "";
    this.empPost = "";
    this.empSalary = "";
  }

}
