import {  Routes } from "@angular/router";
import { CategoriesDetailsComponent } from "src/app/components/categories-details/categories-details.component";
import { CategoriesFormComponent } from "src/app/components/categories-form/categories-form.component";

export const categoriesRouting : Routes = [ 
    {path : 'add', component : CategoriesFormComponent},
    {path : 'edit/:id', component : CategoriesFormComponent},
    {path : ':id', component : CategoriesDetailsComponent},
];

