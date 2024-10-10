import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../data.service";
import {JSONRecord} from "../JSONRecord";

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
  }

  answer: JSONRecord[] | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const fileName = params.get('fileName');
      if (fileName) {
        this.dataService.getData(fileName).subscribe((data: JSONRecord[]) => {
          this.answer = data;
        });
      }
    });
  }
}
