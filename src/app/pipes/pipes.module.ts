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





@NgModule({
  declarations: [
      PipeDocumentationComponent,
      TruncatePipe,
      CreditCardFormatterPipe,
     
     
     ],
  imports: [
    CommonModule,
   SharedModuleModule,
    RouterModule.forChild(Pipes_Routes),
    
  ]
})
export class PipesModule { }
