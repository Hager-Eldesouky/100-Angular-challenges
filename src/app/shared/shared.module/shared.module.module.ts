import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { LoaderSpinnerComponent } from '../../components/loader-spinner/loader-spinner.component';



@NgModule({
  declarations: [CardComponent,LoaderSpinnerComponent],
  exports:[CardComponent,LoaderSpinnerComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModuleModule { }
