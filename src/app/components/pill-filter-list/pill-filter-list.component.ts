import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pill-filter-list',
  templateUrl: './pill-filter-list.component.html',
  styleUrl: './pill-filter-list.component.scss'
})
export class PillFilterListComponent {
  

  @Input() set pills(value: string[]) {
   
    this.unselectedPills = value;
  }

  public unselectedPills: string[] = [];
  public selectedPills: string[] = [];

  public selected = new EventEmitter<string[]>();

  public addFilter(pillDetails: { hasBeenSelected: boolean, label: string }): void {
    if (pillDetails.hasBeenSelected) {
      const selectedIndex = this.unselectedPills.indexOf(pillDetails.label);
      const [selectedPill] = this.unselectedPills.splice(selectedIndex, 1);
      this.selectedPills.push(selectedPill);
      this.selected.emit(this.selectedPills);
    }
  }

  public removeFilter(pillDetails: { hasBeenSelected: boolean, label: string }): void {
    if (!pillDetails.hasBeenSelected) {
      const selectedIndex = this.selectedPills.indexOf(pillDetails.label);
      const [selectedPill] = this.selectedPills.splice(selectedIndex, 1);
      this.unselectedPills.push(selectedPill);
    }
  }
}
