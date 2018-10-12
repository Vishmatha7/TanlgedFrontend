import { Component, OnInit } from '@angular/core';
import { Http,Response} from '@angular/Http';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  
proffesion:any = [];
cities :any = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];

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
