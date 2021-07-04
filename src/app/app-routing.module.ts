import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptypageComponent } from './emptypage/emptypage.component';
import { ProductWaterQualityComponent } from './product-water-quality/product-water-quality.component';

const routes: Routes = [
  {path: "", redirectTo: "/pwq", pathMatch: "full"},
  {path: "pwq", component: ProductWaterQualityComponent},
  {path: "**", component: EmptypageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
