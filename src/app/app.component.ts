import { Component, OnInit, } from '@angular/core';
import { from } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style(
          {
            height: '200px',
            opacity: 1,
            backgroundColor: 'Yellow'
          }
        )
      ),
      state(
        'closed',
        style(
          {
            height: '100px',
            opacity: 0.8,
            backgroundColor: 'Blue'
          }
        )
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('1s')])
    ])
  ]

})
export class AppComponent implements OnInit {
  title = "my-first-project"

  cuisine: string = '';

  isOpen= false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
    this.title = 'nouveau title'
    console.log('Salut ngoninit')
  }
  onChildMessage(args: string) {
    console.log(args);
  }
}
