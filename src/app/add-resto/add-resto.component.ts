import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {RestoService} from '../resto.service'
import { Router, ActivatedRoute } from '@angular/router';
//import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  
  //image:File;
  
  pageTitle:any;
  alert:boolean=false
  uploadError: string;
  imagePath: string;
  //blogForm: FormGroup;
  resData;
  collection;

constructor(

  private resto:RestoService,
  private router: Router,
  private route: ActivatedRoute
  
  
  ) { }


   

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
   // console.log(id);
    if (id) {
      this.pageTitle = 'Edit Resto';
      this.resto.getBlog(+id).subscribe((result)=>{
        this.resData=result;
        this.collection=this.resData.user;
         //console.log(this.collection);
         this.blogForm.patchValue({
            name: this.collection.name,
            category: this.collection.category,
            
            //name: res.name,
            //category: result.category,
            brand: this.collection.brand,
            desc: this.collection.desc,
            price: this.collection.price,
            id: this.collection.id
          });
          this.imagePath = this.collection.imgpath;
          
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
    //console.log(this.blogForm.value)
    const formData = new FormData();

    formData.append('name', this.blogForm.get('name').value);
    formData.append('category', this.blogForm.get('category').value);
    formData.append('brand', this.blogForm.get('brand').value);
    formData.append('desc', this.blogForm.get('desc').value);
    formData.append('price', this.blogForm.get('price').value);
    formData.append('image', this.blogForm.get('image').value);
    const id = this.blogForm.get('id').value;

    if (id) {
      console.log('Update Product id ' + id);
      formData.append('id', id);
      this.resto.updateBlog(formData, +id).subscribe((result)=>{
          console.log(result)
          //this.router.navigate(['/list']);
        })
      }else
      {
       this.pageTitle = 'Add Resto';
        this.resto.createblog(formData).subscribe((result)=>{
         console.log(result)
       this.router.navigate(['/list']);
          
       })

      
     this.blogForm.reset({})
      }
    

  }
  
  // onSubmit()
  // { 
    
  //    //console.log(this.addRestoform.value)
  //   //this.resto.saveResto(this.addResto.value)
  //   this.resto.saveResto(this.UserForm.value).subscribe((result)=>{
  //   //console.log(result)
        
  //   })
  //   this.UserForm.reset({})
  // }
  // closeAlert(){
  //   this.alert=false
  // }



}
