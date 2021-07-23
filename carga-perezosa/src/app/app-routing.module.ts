import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const  routes:Routes =[
        {
           path:"auth",
           loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule )
        },
        {
          path:"productos",
          loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule )
       }    

];





@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ], exports:[
    RouterModule

  ]
})
export class AppRoutingModule { }
