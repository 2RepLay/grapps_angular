import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.css']
})
export class FileViewComponent implements OnInit {
  @Input('content')
  public  content: string;

  constructor() { }

  ngOnInit() {
  }
}
