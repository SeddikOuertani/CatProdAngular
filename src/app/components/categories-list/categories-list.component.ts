import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  categoriesList : any = []

  constructor(
    private catService : CategoriesService
  ) { }

  ngOnInit(): void {
    this.getCategoriesList()
  }

  getCategoriesList(){
    this.catService.getAllCategories().subscribe({
      next : (res : any) => {
        this.categoriesList = res
      },
      error : (err : any) => {
        console.log(err);
      }
    })
  }

  deleteCategorie(id : number){
    this.catService.deleteById(id).subscribe({
      next : (res : any) => {
        console.log("deleted successfully");
        this.ngOnInit()
      },
      error : (err : any) => {
        console.log(err)
      }
    })
  }

}
