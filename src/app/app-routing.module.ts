import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptypageComponent } from './emptypage/emptypage.component';

const routes: Routes = [
  {path: "", component: EmptypageComponent},
  {path: "**", component: EmptypageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
