import { Component, OnInit } from '@angular/core';
import { ApiGithubService } from '../services/api-github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: any
  
  constructor(private service: ApiGithubService) { }

  ngOnInit() {
    this.service.get()
    .subscribe(response => this.projects = response)
  }
}
