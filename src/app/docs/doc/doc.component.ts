import {Component, OnDestroy, OnInit} from '@angular/core';
import {JSONRecord} from "../JSONRecord";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrl: './doc.component.css'
})
export class DocComponent implements OnInit, OnDestroy {
  constructor(
    // private service: DataService,
    private route: ActivatedRoute,
    ) { }

  private subs: Subscription = new Subscription();

  public answer: JSONRecord[] = [];

  ngOnInit(): void {
    // this.subs.add(
    //   this.service.jsonData$.subscribe(
    //     (data: JSONRecord[]) => {
    //       this.answer = data;
    //     }
    //   )
    // )
  }

  onSelectOption() {
    console.log("puta la wea");
    // this.subs.add(
    //   this.route.paramMap.subscribe(params => {
    //     console.log(params.get('fileName'));
    //   })
    // )
    // this.service.loadJsonByName(fileName);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
