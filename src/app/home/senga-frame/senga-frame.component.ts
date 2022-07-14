import { Component, Input, OnInit } from '@angular/core';
import { SengaModel } from 'src/app/shared/models/senga-object';

@Component({
  selector: 'app-senga-frame',
  templateUrl: './senga-frame.component.html',
  styleUrls: ['./senga-frame.component.scss']
})
export class SengaFrameComponent implements OnInit {

  @Input() senga!: SengaModel;
  constructor() { }

  ngOnInit(): void {
  }

}
