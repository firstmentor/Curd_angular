import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Blog } from '../blog';


@Component({
  selector: 'app-showresto',
  templateUrl: './showresto.component.html',
  styleUrls: ['./showresto.component.css']
})
export class ShowrestoComponent implements OnInit {
  id: number;
  post:Blog
  resData
  collection

  constructor(
    private resto:RestoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);



    this.resto.getBlog(+id).subscribe((result)=>{
      this.resData=result;
      this.collection=this.resData.user;
      console.log(result);
      //console.log(result);
      
  
     })

  
  
  }
  
}



