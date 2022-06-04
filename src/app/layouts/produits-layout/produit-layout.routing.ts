import {  Routes } from "@angular/router";
import { ProduitsDetailsComponent } from "src/app/components/produits-details/produits-details.component";
import { ProduitsFormComponent } from "src/app/components/produits-form/produits-form.component";

export const produitsRouting : Routes = [ 
    {path : 'add', component : ProduitsFormComponent},
    {path : 'edit/:id', component : ProduitsFormComponent},
    {path : ':id', component : ProduitsDetailsComponent},
];

