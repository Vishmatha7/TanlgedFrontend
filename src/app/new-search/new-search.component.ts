import { Component, OnInit,Input } from '@angular/core';
import { RestService } from '../rest.service';
import {  ActivatedRoute,RouterModule, Routes , Router} from '@angular/router';

@Component({
  selector: 'app-new-search',
  templateUrl: './new-search.component.html',
  styleUrls: ['./new-search.component.css']
})
export class NewSearchComponent implements OnInit {

  @Input() productData:any = { selectedProffesion: '', selectedCity: '', selectedDate:'' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  proffesion:any = [
    {id: 1, name: 'Stylist'},
    {id: 2, name: 'Educator'},
  ];
  cities :any = [
      {id: 1, name: 'washington'},
      {id: 2, name: 'chicago'},
      {id: 3, name: 'Pavilnys', disabled: true},
      {id: 4, name: 'New York'},
      {id: 5, name: 'iowa'}
  ];

  ngOnInit() {
  }
  // updateProduct() {
  //   this.rest.searchStylist(this.route.snapshot.params['selectedProffesion'],this.route.snapshot.params['selectedCity'],this.route.snapshot.params['selectedDate']).subscribe((result) => {
  //     this.router.navigate(['/product-details/'+result._id]);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }


}
