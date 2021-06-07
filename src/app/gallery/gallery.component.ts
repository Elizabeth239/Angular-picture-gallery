import { Component, OnInit } from '@angular/core';
import {Gal} from './gallery.service';
import {Picture} from './Picture'; 
@Component({
  selector: 'app-gallery',
  template: `


 
  <div  >
 
  <p *ngFor="let item of mass" (click)="onSelect(item)">
  <img src={{item.image}}/>
 </p>


</div>




<div *ngIf="isSelected">
<p>{{selectedItem.description}}</p><br>
<img src={{selectedItem.image}} />
</div>

`,
  styleUrls: ['./gallery.component.css'],
  providers: [Gal]
})
export class GalleryComponent implements OnInit {
  mass:Picture[]=[];
 selectedItem:Picture=new Picture;
 isSelected:boolean=false;
  constructor(private dataService: Gal){}
    
  onSelect(item: Picture): void {
    this.selectedItem = item;
    this.isSelected=true;
    }
    

  ngOnInit(){
      this.mass = this.dataService.get();
      
  }

content="showSubContent";

// pic1="./assets/images/img1.jpg"
// pic2="./assets/images/img2.jpg"
// pic3="./assets/images/img3.jpg"

//   constructor() { }

//   ngOnInit(): void {
//   }

}
