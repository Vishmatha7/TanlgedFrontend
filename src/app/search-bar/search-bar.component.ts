import { Component, OnInit } from '@angular/core';
import { Http,Response} from '@angular/Http';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  providers: [
    {
        provide: 'http://localhost:51992/api/proffesion',
        useValue: {
            notFoundText: 'Custom not found',
            
        }
    }
]
})
export class SearchBarComponent implements OnInit {
  
//     proffesion:any = [];
//   constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { 
//    }
    
//    ngOnInit() {
//     this.getProffesion(); 
//    }
//    getProffesion() {
//     this.proffesion = [];
//     this.rest.getProffesion().subscribe((data: {}) => {
//       console.log(data);
//       this.proffesion = data;
//     });
//    }
   

}
