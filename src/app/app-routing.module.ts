import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesLayoutComponent } from './layouts/categories-layout/categories-layout.component';
import { ProduitsLayoutComponent } from './layouts/produits-layout/produits-layout.component';

const routes: Routes = [
  { path : '', redirectTo : 'categories/add', pathMatch:'full'},
  { path : 'categories', redirectTo : 'categories/add' , pathMatch : 'full' },
  { path : 'produits', redirectTo : 'produits/add' , pathMatch : 'full' },
  { path : 'categories', component : CategoriesLayoutComponent, children : 
    [
      { 
        path : '',
        loadChildren :  () => import('./layouts/categories-layout/categories-layout.module').then(m => m.CategoriesLayoutModule)
      }
    ]
  },
  { path : 'produits', component : ProduitsLayoutComponent, children : 
    [
      { 
        path : '',
        loadChildren :  () => import('./layouts/produits-layout/produits-layout.module').then(m => m.ProduitsLayoutModule)
      }
    ]
  },{
    path: '**',
    redirectTo: 'categories'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash : true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
