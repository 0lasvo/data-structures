import { Component, OnInit } from '@angular/core';
import { JSONRecord } from "./Components/JSONRecord";
import { DataService } from "./Components/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private service: DataService) { }
  public answer: JSONRecord[] = [];

  title = 'data-structures';
  isSidebarOpen = true;

  ngOnInit(): void {
    this.service.jsonData$.subscribe(
      (data: JSONRecord[]) => {
        this.answer = data;
      }
    );
  }

  onSelectOption(fileName: string) {
    this.service.loadJsonByName(fileName);
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  handleIndexToggle(logicState: boolean) {
    this.isSidebarOpen = logicState;
  }

}
