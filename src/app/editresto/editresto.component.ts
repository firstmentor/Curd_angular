import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {RestoService} from '../resto.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editresto',
  templateUrl: './editresto.component.html',
  styleUrls: ['./editresto.component.css']
})
export class EditrestoComponent implements OnInit {
  pageTitle: string;
  error: string;
  uploadError: string;
  imagePath: string;
  name:any;
  constructor(

    private resto:RestoService,
    private router: Router,
    private route: ActivatedRoute
    
    
    ) { }
   


  

  ngOnInit(): void {


    const id = this.route.snapshot.paramMap.get('id');
    //console.log(id);
    if (id) {
      this.pageTitle = 'Edit Blog vikas';
      this.resto.getBlog(+id).subscribe(
        res => {
          //console.log(res);
          this.blogForm.patchValue({

            name: res.name,
            category: res.category,
            brand: res.brand,
            desc: res.desc,
            price: res.price,
            id: res.id
          });
          this.imagePath = res.image;
        }
      );
    } 
    }

  blogForm = new FormGroup({
      id:new FormControl(''),
      name: new FormControl(''),
      category: new FormControl(''),
      brand: new FormControl(''),
      desc: new FormControl(''),
      price: new FormControl(''),
      image: new FormControl('')
  
    })
  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.blogForm.get('image').setValue(file);
      //console.log(this.blogForm)

      
    }
  }


  onSubmit () {
  console.log(this.blogForm.value)
    const formData = new FormData();
    formData.append('name', this.blogForm.get('name').value);
    formData.append('category', this.blogForm.get('category').value);
    formData.append('brand', this.blogForm.get('brand').value);
    formData.append('desc', this.blogForm.get('desc').value);
    formData.append('price', this.blogForm.get('price').value);
    formData.append('image', this.blogForm.get('image').value);
    const id = this.blogForm.get('id').value;
   // console.log(formData)
     if (id) {
      this.resto.updateBlog(formData, +id).subscribe(
        res => {
           console.log(res);

          });
        }
        
      
    

  }

  

}
