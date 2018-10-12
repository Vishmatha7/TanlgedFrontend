import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-proffesion-lsit',
  templateUrl: './proffesion-lsit.component.html',
  styleUrls: ['./proffesion-lsit.component.css']
})
export class ProffesionLsitComponent implements OnInit {

  proffesion:any = [];
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { 
   }
    
   ngOnInit() {
    this.getProffesion(); 
   }
   getProffesion() {
    this.proffesion = [];
    this.rest.getProffesion().subscribe((data: {}) => {
      console.log(data);
      this.proffesion = data;
    });
   }

}
