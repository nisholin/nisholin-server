import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

  uploadFile(file: File, booleanValue: boolean = true): Observable<any> {
    const formData: FormData = new FormData();
    formData.append("file", file);
    return this.httpClient.post<File>("/upload", formData, {
      reportProgress: true
      });
  }
}
