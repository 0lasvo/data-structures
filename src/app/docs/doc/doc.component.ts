import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {JSONRecord} from "../JSONRecord";

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrl: './doc.component.css'
})
export class DocComponent implements OnInit {

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
