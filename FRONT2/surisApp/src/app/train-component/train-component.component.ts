import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrainParams } from './train-component.interface';

@Component({
  selector: 'train-component',
  templateUrl: './train-component.component.html',
  styleUrls: ['./train-component.component.css']
})
export class TrainComponentComponent {

  public train: any = [];
  public vagon: number = 0;




  constructor(private httpClient: HttpClient) {


  }

  public addVagon(right: boolean): void {
    let number = this.vagon;
    const obj: TrainParams = { vagon: number, right: right };
    console.log(obj);
    console.log(number);
    this.httpClient.post<number>("https://localhost:7077/Add", obj).subscribe(
      (data) => {
        this.train = data;
      }
    );
  }

  public RemoveVagon(right : boolean) : void{
    this.httpClient.post<number>("https://localhost:7077/Delete", right).subscribe(
      (data) => {
        this.train = data;
      }
    );

  }

}
