import { EventEmitter, Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { ButtonMeta } from './button-meta.model';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.scss'
})
export class ButtonToggleComponent {
  @Input() options: ButtonMeta[] = [];
  @Output() selection = new EventEmitter<ButtonMeta>();

  public selected(selectedOption: ButtonMeta): void {
    this.options.forEach((option) => {
      option.isActive = (selectedOption === option);
    });

    this.selection.emit(selectedOption);
  }
}
