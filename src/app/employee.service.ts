import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( 
    private httpClient: HttpClient
  ) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('/employees');
  }

  saveEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>('/employees', employee);
  }

  getEmployeeById(employeeId: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`/employees/${employeeId}`);
  }

  updateEmployee(empId: number, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`/employees/${empId}`, employee);
  }

  deleteEmployee(empId: number): Observable<Employee[]> {
    return this.httpClient.delete<Employee[]>(`/employees/${empId}`);
  }

  sortEmployees(payload: any): Observable<Employee> {
    return this.httpClient.post<Employee>(`/employee/sort`, payload);
  }
}
