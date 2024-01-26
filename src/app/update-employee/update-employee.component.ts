import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { FileUploadService } from '../service/file-upload.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number | any;

  employee: Employee = new Employee();

  selectedFiles: FileList | any;

  currentFileUpload: File | any;
  
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private fileUploadService: FileUploadService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(
      (data)=> {
        this.employee = data;
      },
      err => console.log(err)
    );
  }

  onSubmit() {
    this.updateEmployee();
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      (data)=> {
        console.log(data);
        this.router.navigate(['/employees']);
      },
      err => console.log(err)
    );
  }

  uploadFile(event: any) {
    console.log(event.target.files[0]);
    this.selectedFiles = event.target.files;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.fileUploadService.uploadFile(this.currentFileUpload).subscribe((res)=> {
      alert(res);
    });
  }
}
