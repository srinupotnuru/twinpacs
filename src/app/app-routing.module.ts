import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Your routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // 👈 Add useHash: true
  exports: [RouterModule]
})
export class AppRoutingModule { }
