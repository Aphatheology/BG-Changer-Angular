import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    catVote:number = 0;
    dogVote:number = 0;
    dogPercent:number = 0;
    catPercent:number = 0;
    background = "linear-gradient(141deg, rgba(2,0,36,1) 0%, rgba(93,9,121,1) 35%, rgba(0,212,255,1) 100%)";

    handleVote(animal: any) {
        if(animal === "cat") {
            this.catVote++
            this.catPercent = +(((this.catVote) / (this.catVote + this.dogVote) * 100).toFixed(1));
            this.dogPercent = +(((this.dogVote) / (this.catVote + this.dogVote) * 100).toFixed(1));
        } else {
            this.dogVote++
            this.dogPercent = +(((this.dogVote) / (this.catVote + this.dogVote) * 100).toFixed(1));
            this.catPercent = +(((this.catVote) / (this.catVote + this.dogVote) * 100).toFixed(1));
        }

        this.background = `linear-gradient(to right, #4ea1ed 0%, #4ea1ed ${this.catPercent}%, #66cecf ${this.catPercent}%, #66cecf ${this.dogPercent}%)`;
    }
  
}
