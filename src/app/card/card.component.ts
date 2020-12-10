import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tst-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() title:string;
  @Input() msg:string;

  constructor() { }
  ngOnInit(): void {
  }

}
