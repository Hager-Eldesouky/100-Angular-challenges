import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { ServicesDocumentationComponent } from './services/services-documentation/services-documentation.component';
import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from './shared/shared.module/shared.module.module';
import { CreditCardInputComponent } from './components/credit-card-input/credit-card-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwitterPostComponent } from './components/twitter-post/twitter-post.component';
import { LinkedInPostComponent } from './components/linked-in-post/linked-in-post.component';
import { PagingComponent } from './components/paging/paging.component';
import { QuoteComponent } from './components/quote/quote.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { DebounceSearchComponent } from './components/debounce-search/debounce-search.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { ReactiveFormsEmailComponent } from './components/reactive-forms-email/reactive-forms-email.component';
import { CounterComponent } from './components/counter/counter.component';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { RippleButtonDirective } from './directives/RippleButton/ripple-button.directive';
import { OtherDocumentationComponent } from './other/other-documentation/other-documentation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SortTableComponent } from './components/sort-table/sort-table.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { BannerCutOutComponent } from './components/banner-cut-out/banner-cut-out.component';
import { ScaleDirective } from './directives/scale/scale.directive';
import { CountdownComponent } from './components/countdown/countdown.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { ImageLazyloadingDirective } from './directives/lazy-loading-image/image-lazyloading.directive';
import { FooterComponent } from './components/footer/footer.component';
import { SocialMediaBarComponent } from './components/social-media-bar/social-media-bar.component';
import { FieldsetComponent } from './components/fieldset/fieldset.component';
import { PasswordComponent } from './components/password/password.component';
import { PillComponent } from './components/pill/pill.component';
import { PillFilterListComponent } from './components/pill-filter-list/pill-filter-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component'


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
    PagingComponent,
    QuoteComponent,
    ToggleComponent,
    DebounceSearchComponent,
    SearchListComponent,
    
    CounterComponent,
    SimpleTableComponent,
    RippleButtonDirective,
    OtherDocumentationComponent,
    SortTableComponent,
    ButtonToggleComponent,
    BannerCutOutComponent,
    ScaleDirective,
    CountdownComponent,
    ImageLazyloadingDirective,
    FooterComponent,
    SocialMediaBarComponent,
    FieldsetComponent,
    PasswordComponent,
    PillComponent,
    PillFilterListComponent,
    NotFoundComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule,
    SharedModuleModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

    
    
    
    
  ],
  
  providers: [   
    { provide: 'Navigator', useValue: navigator },
    { provide: 'Document', useValue: document },
    { provide: 'Window', useValue: window },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
