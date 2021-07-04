import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptypageComponent } from './emptypage/emptypage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductWaterQualityComponent } from './product-water-quality/product-water-quality.component';

const routes: Routes = [
  {path: "", redirectTo: "/pwq", pathMatch: "full"},
  {path: "pwq", component: ProductWaterQualityComponent},
  {path: "swq", component: EmptypageComponent},
  {path: "spc", component: EmptypageComponent},
  {path: "bdq", component: EmptypageComponent},
  {path: "sld", component: EmptypageComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
