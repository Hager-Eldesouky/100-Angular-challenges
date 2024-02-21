import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { PipeDocumentationComponent } from './pipes/pipe-documentation/pipe-documentation.component';
import { ServicesDocumentationComponent } from './services/services-documentation/services-documentation.component';
import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from './pipes/pipes.module';
import { SharedModuleModule } from './shared/shared.module/shared.module.module';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';
import { CreditCardInputComponent } from './components/credit-card-input/credit-card-input.component';
import { FormsModule } from '@angular/forms';
import { TwitterPostComponent } from './components/twitter-post/twitter-post.component';
import { LinkedInPostComponent } from './components/linked-in-post/linked-in-post.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    
    AccordionComponent,
    ProgressBarComponent,
    StarRatingComponent,
    TopOfPageComponent,
    ComponentDocumentationComponent,
    ServicesDocumentationComponent,
    DirectiveDocumentationComponent,
    CreditCardInputComponent,
    TwitterPostComponent,
    LinkedInPostComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule,
    SharedModuleModule,
    FormsModule
    
    
    
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
