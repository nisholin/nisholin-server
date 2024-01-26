import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  columns = [
    {
      name: "firstName", displayName: "First Name", sortKey: "name"
    },
    {
      name: "lastName", displayName: "Last Name", sortKey: "lastName"
    },
    {
      name: "email", displayName: "Email", sortKey: "email"
    },
    {
      name: "action", displayName: "Action", sortKey: "action"
    }
  ]

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployeeList().subscribe(
      (data) => {
        this.employees = data;
      },
      error => console.log(error)
    );
  }
  
  employeeDetails(id: any) {
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: any) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(empId: any) {
    this.employeeService.deleteEmployee(empId).subscribe(
      (data: Employee[]) => {
        if (data) this.getEmployees();
      },
      error => console.log(error)
    );
  }

  viewEmployee(empId: any) {
    this.employeeDetails(empId);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(["/login"]);
  }

  sortColumn(columns: any) {
    console.log(columns)
    let payload = {
      "searchKey":columns.sortKey,
      "pageNo": 0,
      "sortBy": columns.sortKey,
      "sortType": "desc"
    }
    this.employeeService.sortEmployees(payload).subscribe((data: Employee)=> {

    })
  }
}
