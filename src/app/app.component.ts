import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tweet-comp';
  name = 'Rajib Ganguly';
  textOfIns = 'Total 10 cherecter allowed. You can enter more: ';
  numberOfCharNumber = 10;
  numberOfChar = '';
  tCol: boolean = true;
  comment1 = '';
  comment2 = '';



  public addedTxt(ev:any) {
    this.numberOfChar = ev.target.value.length;
    this.numberOfCharNumber =  10 - parseInt(this.numberOfChar);
    if(ev.target.value.length >= 10) {
      //ev.target.style.color = 'red';
      let result = ev.target.value.substring(this.comment1.length, 100);
      this.comment2 = result;
      this.tCol = false;
    } else {
      //ev.target.style.color = '#666';
      this.tCol = true;
      this.comment1 = ev.target.value;
    }
    console.log(`${ev.target.value}|${this.comment1}|${this.comment2}`);
  }
}
