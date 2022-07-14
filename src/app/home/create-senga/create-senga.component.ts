import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-senga',
  templateUrl: './create-senga.component.html',
  styleUrls: ['./create-senga.component.scss']
})
export class CreateSengaComponent implements OnInit {
  backColor = 'default';
  showPalette = false;

  showTitle = false;

  writeText = true;
  takePhoto = false;
  takeVideo = false;

  title!: string;
  description!: string;
  constructor() { }

  ngOnInit(): void {
  }

  onToggle(btn: string){
    this.writeText = this.takePhoto = this.takeVideo = false;
    switch(btn){
      case 'WriteText':
        this.writeText = true;
        return;
      case 'TakePhoto':
        this.takePhoto = true;
        return;
      case 'TakeVideo':
        this.takeVideo = true;
        return;
    }
  }

  onCreateNote(){
    console.log('title: ', this.title);
    console.log('dez: ', this.description);

  }

  onTextAreaInput(){
    if(this.description.length > 0)
      this.showTitle = true;
    else
      this.showTitle = false;
  }

  onColorSelect(color: string){
    this.backColor = color;
    this.showPalette = false
  }

  onShowPalette(){
    this.showPalette = true
  }

}
