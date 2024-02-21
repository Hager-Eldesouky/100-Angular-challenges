import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {

  @Input() public rating = 5 ;

  public get fullStar(): number[]{
    const totalFullStar = Math.floor(this.rating);
    return Array(totalFullStar).fill(0);
  }

  public get hasHalfStar():boolean{
    const highestRating = 5;
    const hasHalfStar = (this.rating - Math.floor(this.rating)>=0.5)&&this.rating!==highestRating;
    return hasHalfStar;
  }

  public get emptyStar(): number[]{
    const highestRating = 5;
    const totalEmptyStars = Math.floor(highestRating-this.rating);
    return Array(totalEmptyStars).fill(0);

     
  }
     

  
}
