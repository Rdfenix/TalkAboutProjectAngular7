import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Card } from '../model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  cards: Card[] = []

  constructor(private data: DataService) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts = () => {
    this.data.getPosts().subscribe(data => {
      if (!this.isEmpty(data)) {
        //let cards = Object.keys(data).map(i => data[i])
        
      }
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
