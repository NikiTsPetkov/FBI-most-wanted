import { Component, OnInit } from '@angular/core';
import { FbiServiceService } from '../services/fbi-service.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  mostWanted: any = [];

  constructor(private fbi: FbiServiceService) {}
  ngOnInit(): void {
    this.fbi.getMostWanted().subscribe((res: any) => {
      this.mostWanted = res.items;
      // console.log(res.items);
    });
  }
}
