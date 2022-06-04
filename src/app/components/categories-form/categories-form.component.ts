import { Component, NgZone, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';


@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {

  categorieForm = new FormGroup({
    nom : new FormControl(''),
    qt : new FormControl(''),
  })

  formType = "";
  categorie : any = null;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private ngZone : NgZone,
    private catService : CategoriesService) { 
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
      }
    }

  ngOnInit(): void {
    
    this.selectFormType();

    this.route.paramMap.subscribe({
      next : (res : any) => {
        res.get('id')? this.getCategorieById(res.get('id')) : null;
      }
    })
    
  }
  
  addCategorie(){
    let categorie = this.categorieForm.value
    console.log(categorie)
    this.catService.addCategorie(categorie).subscribe({
      next : (res : any) => {
        console.log("categorie added successfully");
        this.ngZone.run(() => this.router.navigateByUrl('/categories'))
      },
      error : (err : any) => {
        console.log("error adding categorie");
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

  getCategorieById(id : number){
    this.catService.getById(id).subscribe({
      next : (res : any) => {
        this.categorie = res;
      },
      error : (err : any) => {
        console.log(err.error);
      }
    })
  }

  updateCategorie(id : number){
    let categorie = { ... this.categorie};
    categorie = {... categorie ,... this.categorieForm.value};
    this.catService.updateById(id, categorie).subscribe({
      next : (res : any) => {
        console.log("updated Successfully")
        this.ngZone.run(() => this.router.navigateByUrl('/categories'))
      },
      error : (err:  any) => {
        console.log(err.error)
      }
    })
  }

}
