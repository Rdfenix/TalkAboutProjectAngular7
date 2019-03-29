import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Card } from '../model/card';
import { User } from '../model/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  constructor(private data: DataService) { }

  cards: object[] = [];

  ngOnInit() {
    this.getPosts()
  }

  getPosts = () => {
    this.data.getPosts().subscribe((dataCard: Card[]) => {
      if (dataCard.length > 0) {
        dataCard.map(item => {
          this.data.getOneUser(item.userID).subscribe((dataUser: User) => {
            this.cards.push({ ...item, userName: dataUser.name })
          })
        })
      }
    })
  }

}
