import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateSengaComponent } from "./home/create-senga/create-senga.component";
import { HomeComponent } from "./home/home.component";
import { SengaDetailsComponent } from "./home/senga-details/senga-details.component";

const routes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'senga/:id/details', component: SengaDetailsComponent},
  {path: 'senga/new', component: CreateSengaComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
