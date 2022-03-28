import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
 @Input('isFavorite') isSelected: boolean | undefined;
 @Output('change') click = new EventEmitter();


  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({newValue: this.isSelected});
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
