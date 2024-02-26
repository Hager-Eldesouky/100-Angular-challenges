import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';
import { ServicesDocumentationComponent } from './services/services-documentation/services-documentation.component';
import { OtherDocumentationComponent } from './other/other-documentation/other-documentation.component';

const routes: Routes = [
  {path:'',component:ComponentDocumentationComponent},
  
  {path:'directives',component:DirectiveDocumentationComponent},
  {path:'pipes',  loadChildren :()=>import('./pipes/pipes.module').then(m=>m.PipesModule) },
  {path:'services',component:ServicesDocumentationComponent},
  {path:'other',component:OtherDocumentationComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
