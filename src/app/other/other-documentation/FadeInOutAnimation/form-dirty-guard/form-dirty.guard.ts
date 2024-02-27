import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { OtherDocumentationComponent } from "../../other-documentation.component";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class FormDirtyGuard implements CanDeactivate<OtherDocumentationComponent>{
    canDeactivate(component: OtherDocumentationComponent): boolean {
  if(component.form.dirty){
    return confirm('your form is dirty , do you wanna leave')
  }
        return true;
        
    }


}