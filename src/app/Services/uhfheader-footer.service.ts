import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SafeStyle, SafeHtml, SafeScript, DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class UHFHeaderFooterService {
  
  constructor(private http: HttpClient) { 
  }

  getHeaderFooter()
  {
    this.http.get('http://localhost:7071/api/getHeaderFooterInfo').subscribe(response => {
      return response;
    })
  }
}
