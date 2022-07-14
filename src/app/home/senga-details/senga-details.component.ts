import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { SengaModel } from 'src/app/shared/models/senga-object';

@Component({
  selector: 'app-senga-details',
  templateUrl: './senga-details.component.html',
  styleUrls: ['./senga-details.component.scss']
})
export class SengaDetailsComponent implements OnInit {

  senga!: any;
  comments!: any[]
  constructor(private route: ActivatedRoute, private ds: DataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      let id = res.get('id') ?? 0;
      this.getData(+id)
    })
  }

  getData(id: any){
    console.log(id);
    this.ds.getById(id).subscribe(res =>{
      this.senga = res.senga;
      this.comments = res.comments.comments;
      console.log(this.comments);

    })
  }

}
