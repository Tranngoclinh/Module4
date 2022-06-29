import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componer1',
  templateUrl: './componer1.component.html',
  styleUrls: ['./componer1.component.css']
})
export class Componer1Component implements OnInit {
  name = 'Trần Ngọc Linh'
  constructor() { }

  ngOnInit(): void {
  }

}
