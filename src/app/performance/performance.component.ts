import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {
  tabsColor = 'accent';
  tabsBackgroundColor = 'primary';
  constructor() { }

  ngOnInit(): void {
  }

}
