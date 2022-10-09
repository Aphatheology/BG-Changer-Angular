import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-voting-box',
  templateUrl: './voting-box.component.html',
  styleUrls: ['./voting-box.component.css']
})
export class VotingBoxComponent implements OnInit {
    @Input() catPercent!: number;
    @Input() dogPercent!: number;

    @Output() newVote = new EventEmitter<any>();

    handleVote(animal: any): void {
        this.newVote.emit(animal)
    }
    

  constructor() { }

  ngOnInit(): void {
  }

}
