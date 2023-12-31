import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  constructor(private http:HttpClient) { }

  baseURL:string="http://localhost:8080/license/";

  public addLicesne(details:any){
    return this.http.post(`${this.baseURL}addLicense`,details)
  }
  
  public addLicenses(details:any,n:number){
    return this.http.post(`${this.baseURL}addLicenses/${n}`,details)
  }

  public getLicense(id:string){
    return this.http.get(`${this.baseURL}getLicense/${id}`)
  }

  public getAllLicenses(){
    return this.http.get(`${this.baseURL}getAllLicenses`)
  }

  public getUnAssignedLicenses(){
    return this.http.get(`${this.baseURL}getUnAssignedLicenses`)
  }

  public updateLicense(details:any){
    return this.http.put(`${this.baseURL}updateLicense`,details)
  }

  public deleteLicense(id:string){
    return this.http.delete(`${this.baseURL}deleteLicense/${id}`)
  }

  public assignDevice(details:any){
    return this.http.post(`${this.baseURL}assignDevice`,details)
  }

  public assignSoftware(details:any){
    return this.http.post(`${this.baseURL}assignSoftware`,details)
  }

  public getLicesneByID(id:string){
    return this.http.get(`${this.baseURL}getLicenseByID/${id}`)
  }

  public getRequests(){
    return this.http.get(`${this.baseURL}getRequests`)
  }

  public raiseRequest(id:string){
    return this.http.post(`${this.baseURL}raiseRequest/${id}`,{})
  }

  public acceptRequest(id:string){
    return this.http.post(`${this.baseURL}acceptRequest/${id}`,{})
  }

}
