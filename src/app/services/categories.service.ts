import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  baseUrl = "http://localhost:8081/api/categories"
  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Access-Control-Allow-Origin", "*");
  
  constructor(
    private http : HttpClient
  ) { }

  getAllCategories(){
    return this.http.get(this.baseUrl, {headers : this.headers} );
  }

  getById(id : number){
    return this.http.get(`${this.baseUrl}/${id}`, {headers : this.headers});
  }

  deleteById(id : number){
    return this.http.delete(`${this.baseUrl}/supprimer/${id}`, {headers : this.headers});
  }
  
  addCategorie(category : any){
    return this.http.post(`${this.baseUrl}/ajouter`, category, {headers : this.headers.set("Access-Control-Allow-Origin","POST")});
  }

  updateById(id : number, category : any){
    return this.http.put(`${this.baseUrl}/modifier/${id}`, category, {headers : this.headers});
  }

  getExcel( ){
    return this.http.get<any>(`${this.baseUrl}/export/excel`, {responseType : 'arraybuffer' as 'json'})
  }
  
  getPDF( ){
    return this.http.get<any>(`${this.baseUrl}/export/pdf`, {responseType : 'arraybuffer' as 'json'})
  }
}
