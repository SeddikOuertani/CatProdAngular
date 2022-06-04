import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitsLayoutComponent } from './produits-layout.component';
import { RouterModule } from '@angular/router';
import { produitsRouting } from './produit-layout.routing';
import { ProduitsListComponent } from 'src/app/components/produits-list/produits-list.component';
import { ProduitsDetailsComponent } from 'src/app/components/produits-details/produits-details.component';
import { ProduitsFormComponent } from 'src/app/components/produits-form/produits-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProduitsLayoutComponent,
    ProduitsListComponent,
    ProduitsDetailsComponent,
    ProduitsFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(produitsRouting),
  ]
})
export class ProduitsLayoutModule { }
