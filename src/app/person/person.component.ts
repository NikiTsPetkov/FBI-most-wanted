import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FbiServiceService } from '../services/fbi-service.service';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  uid: any |string = '';
  mostWanted: any = [];
  person: any = {};
  constructor(private route: ActivatedRoute, private fbi: FbiServiceService) {}

  ngOnInit(): void {
    this.uid = this.route.snapshot.paramMap.get('uid');
    this.fbi.getMostWanted().subscribe((res: any) => {
      this.mostWanted = res;
      this.person = this.mostWanted.items[this.uid];
      console.log(this.person);
      // this.person.images[0].thumb = 'http://via.placeholder.com/640x360';
    });
  }
}