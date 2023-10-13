import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

    parent_list: any = [];



    get_person() {
        const person = [{name:'John' , profession:'Architect' , img:"../../assets/avatar1.png"},
                        {name:'Bob' , profession:'Civil Engineer' , img:"../../assets/avatar2.png"},
                        {name:'Alex' , profession:'Computer Scientist' , img:"../../assets/avatar3.png"},
                        {name:'Andrew' , profession:'Mechanical Engineer' , img:"../../assets/avatar4.png"},]
        return person
    }

    ngOnInit() {
        this.parent_list = this.get_person();
    }

}
