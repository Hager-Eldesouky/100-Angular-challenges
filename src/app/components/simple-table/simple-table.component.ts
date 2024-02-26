import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrl: './simple-table.component.scss'
})
export class SimpleTableComponent {


  @Input() public tableDate: any[] = [
    { first:'Hager ', last: ' walid ', dob:'10/25/1965'

    },
    { first:'ivad ', last: ' fdylr ', dob:'10/5/1965'

  },
  { first:'Haooor ', last: ' zyleee ', dob:'10/4/1965'

},
  ];
}
