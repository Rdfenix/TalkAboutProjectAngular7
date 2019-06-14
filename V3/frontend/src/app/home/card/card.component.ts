import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cards: Card[] = []
  @Output() delete = new EventEmitter<any>()

  constructor() { }

  deltePost = (id: number) => this.delete.emit(id)

  ngOnInit() {
  }

}
