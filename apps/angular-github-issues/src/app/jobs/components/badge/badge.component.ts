import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
  @Input() badgeConfig = '';

  public url = '';

  constructor() { }

  ngOnInit(): void {
    this.url = `https://img.shields.io/badge/salary-${this.badgeConfig}-blue`;
  }

}
