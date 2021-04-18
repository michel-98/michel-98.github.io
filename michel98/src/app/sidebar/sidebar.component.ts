import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor(public linguaSer: LanguageService) { }

  ngOnInit(): void {
  }


}
