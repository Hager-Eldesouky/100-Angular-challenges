import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { LoaderSpinnerComponent } from '../../components/loader-spinner/loader-spinner.component';
import { FilterTermPipe } from '../../pipes/FilterTerm/filter-term.pipe';



@NgModule({
  declarations: [CardComponent,LoaderSpinnerComponent,FilterTermPipe],
  exports:[CardComponent,LoaderSpinnerComponent,FilterTermPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModuleModule { }
