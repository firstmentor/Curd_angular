import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from './blog';


@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url="http://127.0.0.1:8000/api/"

  constructor(private htpp:HttpClient) { }

  getlist():Observable<any>{
    //console.log("vikas jain");
    return this.htpp.get(this.url+'allData')
  }
  

  createblog(blog)
  {
    //console.log(data)
    return this.htpp.post(this.url+'add',blog)
  }


  getBlog(id: number):Observable<any> {
    return this.htpp.get<Blog>(this.url + 'show/' + id)
    
  }
  
  updateBlog(blog, id: number) {
    console.log('Update Product id ' + id);
    return this.htpp.put<Blog>(this.url + 'update/' + id, blog)
    
  }

  deleteResto(id)
  {
    console.log(id)
    return this.htpp.delete(`${this.url}/${id}`)


  }
  getCurrentResto(id)
  {
    console.log(id)
    return this.htpp.get(`${this.url}/${id}`)


  }
  updateResto(id,data)
  {
    return this.htpp.put(`${this.url}/${id}`,data)
  }


}
