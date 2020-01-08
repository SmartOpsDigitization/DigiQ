import { Component, OnInit, Input } from '@angular/core';
import { Path } from '../DataStructures';

@Component({
  selector: 'app-path-bar',
  templateUrl: './path-bar.component.html',
  styleUrls: ['./path-bar.component.css']
})
export class PathBarComponent implements OnInit {
  
  @Input() public paths:Path[]

  constructor() { }

  ngOnInit() {
  }

}
