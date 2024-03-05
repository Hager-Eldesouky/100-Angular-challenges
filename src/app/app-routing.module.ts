import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';
import { ServicesDocumentationComponent } from './services/services-documentation/services-documentation.component';
import { OtherDocumentationComponent } from './other/other-documentation/other-documentation.component';
import { FormDirtyGuard } from './other/other-documentation/form-dirty-guard/form-dirty.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {  data:{title:'Components'},
    path:'',component:ComponentDocumentationComponent},
  
  {   data:{title:'Directives'},
    path:'directives',component:DirectiveDocumentationComponent},
  {
    data:{title:'Pipes'},
    path:'pipes',  loadChildren :()=>import('./pipes/pipes.module').then(m=>m.PipesModule) },
  {path:'services',component:ServicesDocumentationComponent},
  {
    data:{title:'other'},
    path:'other',component:OtherDocumentationComponent  ,canDeactivate:[FormDirtyGuard] },

    {path:'**', component:NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
