import { Component, OnInit } from '@angular/core';
import { FbiServiceService} from './services/fbi-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FBI-most-wanted';

  mostWanted: any = [];

  constructor(private fbi: FbiServiceService){

  }

  ngOnInit(): void{
    this.fbi.getMostWanted().subscribe((res: any)=>{
      this.mostWanted = res.items;
      console.log(res.items[0]);
    })
  }
}
