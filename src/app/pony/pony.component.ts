import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PonyModel } from '../models/pony.model';

@Component({
  selector: 'pr-pony',
  standalone: true,
  imports: [],
  templateUrl: './pony.component.html',
  styleUrl: './pony.component.css'
})
export class PonyComponent {
  @Input({ required: true })
  ponyModel!: PonyModel;

  @Output()
  ponyClicked = new EventEmitter<PonyModel>();

  clicked() {
    this.ponyClicked.emit(this.ponyModel);
  }

  getPonyImageUrl() {
    return 'assets/images/pony-' + this.ponyModel.color.toLowerCase() + '.gif';
  }
}
