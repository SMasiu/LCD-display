import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lcd-display',
  templateUrl: './lcd-display.component.html',
  styleUrls: ['./lcd-display.component.scss'],
})
export class LcdDisplayComponent implements OnInit {

  /*number to display
  default 0*/
  @Input() number: number = 0;

  /*display's background-color
  default #000 (black) */
  @Input() backgroundColor: string = '#000';

  /*digit width
  default 20px*/
  @Input() width: string = '20px';

  /*digit height
  default 40px*/
  @Input() height: string = '40px';
  
  /* active lines color
  default rgb(243, 0, 0) (bright-red) */
  @Input() activeColor: string = 'rgb(243, 0, 0)';

  /* disabled lines color
  default rgb(60, 0, 0) (dark-red) */
  @Input() disabledColor: string = 'rgb(60, 0, 0)';

  /*maximal number of digits in number. Each number with more digits then maxNumberLength'll be writen like 9*maxNumberLength for example: maxNumberLength = 3 => 999
  Setting this value to null this option'll be disactiated
  default null*/
  @Input() maxNumberLength: number | null = null;

  /*minimal number of digits in number. Each number with less digits then minNumberLength'll be writen for example: minNumberLength = 4; number = 21 => 0021
  Setting this value to null this option'll be disactiated
  default null*/
  @Input() minNumberLength: number | null = null;

  //regEpx for displaying numbers
  reg1 = /[1,4]/;
  reg2 = /[1-3,7]/;
  reg3 = /[5,6]/;
  reg4 = /[0,1,7]/;
  reg5 = /[1,3-5,7,9]/;
  reg6 = /[2]/;
  reg7 = /[1,4,7]/;

  displayValue: string;

  constructor() { }

  ngOnInit() {

    this.displayValue = this.number.toString();

    if( (this.minNumberLength > this.maxNumberLength) && this.maxNumberLength !== null )
      throw new Error("min number can't be higher than max");

    //checking for min number lenght
    if ( this.minNumberLength && this.displayValue.length < this.minNumberLength ) {
      
      let count = this.minNumberLength - this.displayValue.length;

      for( let i = 0; i < count; i++ )
      {
        this.displayValue = `0${this.displayValue}`;
      }

    }

    //checking for max number lenght
    if ( this.maxNumberLength && this.displayValue.length > this.maxNumberLength) {

      let output = '';

      for ( let i = 0; i < this.maxNumberLength; i++ )
      {
        output+='9';
      }

      this.displayValue = output;

    }

  }

}

