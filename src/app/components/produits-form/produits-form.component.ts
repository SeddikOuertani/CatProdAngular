import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-produits-form',
  templateUrl: './produits-form.component.html',
  styleUrls: ['./produits-form.component.scss']
})
export class ProduitsFormComponent implements OnInit {

  categoriesList !: Observable<any>;  

  produitForm = new FormGroup({
    nom : new FormControl(),
    qt : new FormControl(''),
    disponible : new FormControl(),
    categorie : new FormControl()
  })

  formType = "";
  produit : any;
  selectedCategorie : any;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private ngZone : NgZone,
    private catService : CategoriesService,
    private prodService : ProduitsService) { 
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
      }
      
    }

  ngOnInit(): void {
    
    this.selectFormType();
    this.getCategoriesList();
    this.route.paramMap.subscribe({
      next : (res : any) => {
        res.get('id')? this.getProductById(res.get('id')) : null;
      }
    })
    
  }
  
  addProduit(){
    let produit = this.produitForm.value;
    produit.categorie = this.selectedCategorie;
    console.log(produit);
    this.prodService.addProduit(produit).subscribe({
      next : (res : any) => {
        console.log("produit added successfully");
        this.ngZone.run(() => this.router.navigateByUrl('/produits'))
      },
      error : (err : any) => {
        console.log("error adding produit");
      }
    })
  }

  selectFormType(){
    if(this.route.snapshot.url[0].path === "add"){
      this.formType = "add"
    }else{
      this.formType = "update"
    }
  }

  getProductById(id : number){
    this.prodService.getById(id).subscribe({
      next :  (res : any) => {
        this.produit =  res;
        console.log(res)
        this.produitForm = new FormGroup({
          nom : new FormControl(res.nom),
          qt : new FormControl(res.qt),
          disponible : new FormControl(res.disponible),
          categorie : new FormControl(res.categorie)
        })
      },error : (err : any) => {
        console.log(err.error)
      }
    })
  }

  updateProduit(id : number){
    let produit = {...this.produit}
    produit = {...produit, ...this.produitForm.value}
    this.prodService.updateProduit(id, produit).subscribe({
      next : (res : any) => {
        console.log("updated Successfully")
        this.ngZone.run(() => this.router.navigateByUrl('/produits'))
      },
      error : (err:  any) => {
        console.log(err.error)
      }
    })
  }

  getCategoriesList(){
    this.categoriesList = this.catService.getAllCategories().pipe(map(categories=> {
      console.log(categories)
      return categories
    }));
  }

  updateCategorieSelected(event : any){
    this.selectedCategorie = event
  }



}
