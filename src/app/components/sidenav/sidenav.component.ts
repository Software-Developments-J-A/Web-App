import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from 'src/app/models/nav-data';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  navData= navbarData;
  constructor() { }

  ngOnInit(): void {
  }
}
