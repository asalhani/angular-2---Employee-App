import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rating-star',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent  {

  constructor() { }
  private range: Array<number> = [1, 2, 3, 4, 5];
  
  @Input('employeeRating') rating: number;
  @Input() employeeId : number;

  @Output() ratingClicked : EventEmitter<any> = new EventEmitter<any>();

  onClick(ratingValue: number){
    this.rating = ratingValue;
    this.ratingClicked.emit({
      employeeId: this.employeeId,
      rating: this.rating
    });
  }


}
