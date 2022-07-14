import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { SengaType, SengaTypeIcons } from './shared/models/constants';
import { SengaModel } from './shared/models/senga-object';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: SengaModel[]=[]
  private comments: any[]=[]
  constructor() {
    //this.createData();
  }
  total = 0;
  private createData(size: number = 5){
    console.log('creating arr');
    console.log('current length', this.data.length);

    if(this.data.length > 0) this.data = [];

    for(let i=this.total+1; i<=size+this.total; i++){

      this.data.push({
        id: i,
        icon: SengaTypeIcons.VIDEO,
        comments: Math.floor(Math.random() * 100),
        likes: Math.floor(Math.random() * 100),
        time: '25min',
        type: i%2 == 0 ? SengaType.VIDEO : SengaType.TEXT,
        url: '../assets/img/manu.jpg',
        backColor: '#20a8f7',
        description: `${i}: Text will go here. We will text here okay. Yeah, we will. `
      })

      this.comments.push({
        sengaId: i,
        comments: ['wow! this is so cool', 'when do you wanna get it?', 'this is gonna be a very very very very very very long textttttttttttt', 'yeah yeah', 'reeddd', 'tyrr']
      })


    }
    this.total += size;
    // this.data.push({ id: 1, icon: SengaTypeIcons.AUDIO, comments: 123, likes: 15, time: '25min', type: SengaType.AUDIO, url: '../assets/img/goz.jpg'})
    // this.data.push({id: 2, icon: SengaTypeIcons.VIDEO, comments: 123, likes: 15, time: '25min', type: SengaType.VIDEO, url: '../assets/img/manu.jpg'})
    // this.data.push({id: 3, icon: SengaTypeIcons.PHOTO, comments: 203, likes: 165, time: '59min', type: SengaType.PHOTO, url: '../assets/img/milan.jpg'})
    // this.data.push({id: 4, icon: SengaTypeIcons.PHOTO, comments: 203, likes: 165, time: '2hrs', type: SengaType.PHOTO, url: '../assets/img/barca.jpg'})

    // this.comments.push({sengaId: 1, comments: ['wow! this is so cool', 'when do you wanna get it?', 'this is gonna be a very very very very very very long textttttttttttt', 'yeah yeah', 'reeddd', 'tyrr']})
    // this.comments.push({sengaId: 2, comments: ['wow! this is so cool', 'when do you wanna get it?', 'this is gonna be a very very very very very very long textttttttttttt', 'yeah yeah']})
    // this.comments.push({sengaId: 3, comments: ['wow! this is so cool', 'when do you wanna get it?', 'this is gonna be a very very very very very very long textttttttttttt', 'yeah yeah']})
    // this.comments.push({sengaId: 4, comments: ['wow! this is so cool', 'when do you wanna get it?', 'this is gonna be a very very very very very very long textttttttttttt', 'yeah yeah']})
console.log('exiting createData: current length', this.data);
console.log('total', this.total);

}
  getData(size: number){
    this.createData(size * 10);
    return of(this.data).pipe(delay(4000));
  }

  getById(id: number){
    const obj = {} as any;
    obj.senga = this.data.find(e=>e.id === id);
    obj.comments = this.comments.find(e => e.sengaId === id)
    return of(obj);
  }
}
