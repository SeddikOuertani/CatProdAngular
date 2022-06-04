import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.scss']
})
export class CategoriesDetailsComponent implements OnInit {

  categorie : any;
  produitsList$ : Observable<any>;

  constructor(
    private router : Router,
    private prodService : ProduitsService,
    private route : ActivatedRoute,
    private catService : CategoriesService
  ) {
      this.produitsList$ = new Observable();
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : async (res: any) => {
        this.getCategorieById(res.get('id'))
        this.produitsList$ = this.prodService.getByCategorieId(res.get('id'))
          .pipe(map(produits => {
            return produits
          }))
      }
    })
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

}
