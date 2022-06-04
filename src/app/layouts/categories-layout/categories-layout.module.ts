import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesLayoutComponent } from './categories-layout.component';
import { RouterModule } from '@angular/router';
import { categoriesRouting } from './categories-layout.routing';
import { CategoriesListComponent } from 'src/app/components/categories-list/categories-list.component';
import { CategoriesDetailsComponent } from 'src/app/components/categories-details/categories-details.component';
import { CategoriesFormComponent } from 'src/app/components/categories-form/categories-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoriesLayoutComponent,
    CategoriesListComponent,
    CategoriesDetailsComponent,
    CategoriesFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(categoriesRouting),
    ReactiveFormsModule
  ]
})
export class CategoriesLayoutModule { }
