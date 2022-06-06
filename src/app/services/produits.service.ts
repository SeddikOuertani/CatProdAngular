import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  baseUrl = "http://localhost:8081/api/produits"
  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Access-Control-Allow-Origin","*");

  constructor(private http : HttpClient) { }

  getByCategorieId(idCat : number){
    return this.http.get(`${this.baseUrl}/bycategorie/${idCat}`, {headers : this.headers});
  }

  getById(idProd : number){
    return this.http.get(`${this.baseUrl}/${idProd}`, {headers : this.headers});
  }


  getAllProduits(){
    return this.http.get(this.baseUrl, {headers : this.headers});
  }

  addProduit(prod : number){
    return this.http.post(`${this.baseUrl}/ajouter`, prod, {headers : this.headers});
  }
  
  updateProduit(id : number, prod : any){
    return this.http.put(`${this.baseUrl}/modifier/${id}`, prod, {headers : this.headers});
  }

  deleteProduit(id : number){
    return this.http.delete(`${this.baseUrl}/supprimer/${id}`, {headers : this.headers});
  }

  getExcel( ){
    return this.http.get<any>(`${this.baseUrl}/export/excel`, {responseType : 'arraybuffer' as 'json'})
  }

  getPDF( ){
    return this.http.get<any>(`${this.baseUrl}/export/pdf`, {responseType : 'arraybuffer' as 'json'})
  }
}
