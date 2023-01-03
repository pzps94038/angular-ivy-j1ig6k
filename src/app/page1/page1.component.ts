import { Component, OnInit } from '@angular/core';
import { fromEvent, take } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
})
export class Page1Component implements OnInit {
  name;
  constructor() {
    fromEvent(document.body, 'click')
      .pipe()
      .subscribe(() => {
        console.log('頁面1觸發點擊事件');
      });
  }

  ngOnInit() {}
}
