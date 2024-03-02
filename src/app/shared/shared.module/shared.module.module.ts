import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { LoaderSpinnerComponent } from '../../components/loader-spinner/loader-spinner.component';
import { FilterTermPipe } from '../../pipes/FilterTerm/filter-term.pipe';
import { ReactiveFormsEmailComponent } from '../../components/reactive-forms-email/reactive-forms-email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';
import { TabsComponent } from '../../components/tabs/tabs.component';



@NgModule({
  declarations: [CardComponent,LoaderSpinnerComponent,FilterTermPipe,ReactiveFormsEmailComponent,SnackbarComponent,TabsComponent],
  
  exports:[CardComponent,LoaderSpinnerComponent,FilterTermPipe,ReactiveFormsEmailComponent,SnackbarComponent,TabsComponent,],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModuleModule { }
