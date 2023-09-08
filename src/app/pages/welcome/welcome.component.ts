import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/data.model';
import { ApiService } from 'src/app/data-service/api.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  listOfData: Post[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPostData().subscribe((posts) => {
      this.listOfData = posts;
    })
  }

}
