import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-produits-list',
  templateUrl: './produits-list.component.html',
  styleUrls: ['./produits-list.component.scss']
})
export class ProduitsListComponent implements OnInit {

  produitList : any = []

  constructor(
    private prodService : ProduitsService,

  ) { }

  ngOnInit(): void {
    this.getProduitList()
  }

  getProduitList(){
    this.prodService.getAllProduits().subscribe({
      next : (res : any) => {
        this.produitList = res
        console.log(res)
      },
      error : (err : any) => {
        console.log(err);
      }
    })
  }

  deleteProduit(id : number){
    this.prodService.deleteProduit(id).subscribe({
      next : (res : any) => {
        console.log("produit deleted successfully")
        this.ngOnInit();
      },
      error : (err : any) => {
        console.log(err.error);
      }
    })
  }

  getExcel(){
    this.prodService.getExcel().subscribe((res : any) => {
      const blob = new Blob([res], { type: 'application/vnd.ms-excel' });
      const url= window.URL.createObjectURL(blob);
      window.open(url);
    })
  }

  getPDF(){
    this.prodService.getPDF().subscribe((res : any) => {
      const blob = new Blob([res], { type: 'application/pdf' });
      const url= window.URL.createObjectURL(blob);
      window.open(url);
    })
  }


}
