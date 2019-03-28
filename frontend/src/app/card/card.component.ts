import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards: object;
  showCards: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts = () => {
    this.data.getPosts().subscribe(data => {
      console.log(this.isEmpty(data))
    })
  }

  isEmpty = (data: object) => {
    for (let key in data) {
      if (data.hasOwnProperty(key))
        return false;
    }
    return true;
  }

}
