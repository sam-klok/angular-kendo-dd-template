import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-kendo-dd-template';
  public listItems: Array<any> = [
    {
      text: 'Small',
      value: 1,
      url: 'https://www.telerik.com/kendo-angular-ui/components/dropdowns/dropdownlist',
    },
    {
      text: 'Medium',
      value: 2,
      url: 'https://www.telerik.com/kendo-angular-ui/components/dropdowns/dropdownlist',
    },
    {
      text: 'Large',
      value: 3,
      url: 'https://www.telerik.com/kendo-angular-ui/components/dropdowns/dropdownlist',
    },
  ];

  public selectedValue = 2;
}
