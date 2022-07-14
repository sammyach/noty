import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, concatMap, mergeMap, Observable, Subscription, switchMap } from 'rxjs';
import { DataService } from '../data.service';
import { SengaModel } from '../shared/models/senga-object';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = true;
  isDownScroll = false;
  isUpScroll = false;
  constructor(private ds: DataService) { }

  currentPage$ = new BehaviorSubject<number>(1);
  currentPageData$ = this.currentPage$.pipe(
    switchMap((currentPage) =>
      this.ds.getData(currentPage)
    )
  ).subscribe( r => {
    this.loading = false;
    this.isUpScroll = false;
    this.data = this.isDownScroll ? this.data.concat(r) : r.concat(this.data);
  })
  data$!: Observable<SengaModel[]>;
  newData$!: Observable<SengaModel[]>;
  data: SengaModel[]=[];
  ngOnInit(): void {
    //this.getData();
    // this.currentPageData$.subscribe(res =>{
    //   console.log('fetching data', this.data?.length);

    //   this.data.concat(res)
    // })
  }

  // getData(){
  //   this.data$ = this.ds.getData(5);//.subscribe();
  //                 // .subscribe(res => {
  //                 //   //this.data = res
  //                 // });
  // }

  onScrollDown(){
    console.log('zcroll loading new...');
    this.isDownScroll = true;
    this.loading = true;
    this.currentPage$.next(this.currentPage$.value + 1)
    // this.newData$ = this.ds.getData(5);
                  // .subscribe(res => {
                  //   // this.data = res
                  // });
    // console.log('zcrolled', this.data.length);
  }

  onScrollUp(){
    this.isUpScroll = true;
    this.isDownScroll = false;
    console.log('up zcrolling...');
    this.loading = true;
    this.currentPage$.next(this.currentPage$.value + 1)
  }

  dataTrackBy(index: number, user: any) {
    return user.id;
  }



}
