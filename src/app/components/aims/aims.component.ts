import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aims',
  templateUrl: './aims.component.html',
  styleUrls: ['./aims.component.scss']
})
export class AimsComponent implements OnInit {
  counter: number = 1;

  ngOnInit() {
    this.startCounting();
  }

  startCounting() {
    const interval = setInterval(() => {
      this.counter += 1000;
      if (this.counter >= 1000000) {
        this.counter = 1000000;
        clearInterval(interval);
      }
    }, 10);
  }
}
