import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromComponent } from './from/from.component';
import { ProdlistComponent } from './prodlist/prodlist.component';
import { ProdUpdateComponent } from './prod-update/prod-update.component';

const routes: Routes = [
  {path: 'product', component:FromComponent},
  {path: '', component:ProdlistComponent},
  {path: 'product/:pid', component:ProdUpdateComponent},
  //{path: 'gotohome', component:FromComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
