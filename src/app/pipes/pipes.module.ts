import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { RouterModule } from '@angular/router';
import { Pipes_Routes } from './pipes.routes';
import { CardComponent } from '../components/card/card.component';
import { AppModule } from '../app.module';
import { SharedModuleModule } from '../shared/shared.module/shared.module.module';
import { TruncatePipe } from './truncate/truncate.pipe';
import { CreditCardFormatterPipe } from './creditCardFormatter/credit-card-formatter.pipe';
import { FilterTermPipe } from './FilterTerm/filter-term.pipe';
import { RichTextPipe } from './RichText/rich-text.pipe';
import { SortByPipe } from './SortBy/sort-by.pipe';
import { SortByKeyPipe } from './SortByKey/sort-by-key.pipe';





@NgModule({
  declarations: [
      PipeDocumentationComponent,
      TruncatePipe,
      CreditCardFormatterPipe,
      RichTextPipe,
      SortByPipe,
      SortByKeyPipe,
      
     
     
     ],
  imports: [
    CommonModule,
   SharedModuleModule,
    RouterModule.forChild(Pipes_Routes),
    
  ]
})
export class PipesModule { }
