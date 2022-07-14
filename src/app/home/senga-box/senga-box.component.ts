import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SengaModel } from 'src/app/shared/models/senga-object';

@Component({
  selector: 'app-senga-box',
  templateUrl: './senga-box.component.html',
  styleUrls: ['./senga-box.component.scss']
})
export class SengaBoxComponent implements OnInit {

  @Input() senga!: SengaModel;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  view(id: any){
    console.log(id);
    this.router.navigate(['/senga', this.senga.id, 'details'])
  }

}
