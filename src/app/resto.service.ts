import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url="http://localhost:3000/restaurants"
  constructor(private htpp:HttpClient) { }

  getlist(){
    //console.log("vikas jain");
    return this.htpp.get(this.url)
  }

  saveResto(data)
  {
    console.log(data)
    return this.htpp.post(this.url,data)
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
