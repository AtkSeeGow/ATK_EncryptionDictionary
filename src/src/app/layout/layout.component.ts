import { Component, AfterViewInit, AfterViewChecked, NgModule } from '@angular/core';

declare const $: any;

@Component({
  selector: 'layout',
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class LayoutComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit() {
    if (window.location.href.indexOf("Overview") !== -1)
      $('#overview').addClass('active');
    else
      $('#overview').addClass('active');
  }
}
