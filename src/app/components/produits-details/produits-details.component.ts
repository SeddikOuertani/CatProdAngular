import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-produits-details',
  templateUrl: './produits-details.component.html',
  styleUrls: ['./produits-details.component.scss']
})
export class ProduitsDetailsComponent implements OnInit {

  produit : any;

  constructor(
    private prodService : ProduitsService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (res: any) => this.getProduitById(res.get('id'))
    })
  }

  getProduitById(id : number){
    this.prodService.getById(id).subscribe({
      next : (res : any) => {
        this.produit = res
      },
      error : (err : any) => {
        console.log(err.error)
      }
    })
  }

}
