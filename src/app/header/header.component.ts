import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

/*Nothing special here, template that holds the tool bar/ navigation links*/
export class HeaderComponent implements OnInit {
  title = 'particles';

  constructor() { }

  ngOnInit() {
  }

}
