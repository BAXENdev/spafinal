import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProjectInstance } from 'src/app/interfaces/projectInstance';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.scss']
})
export class ProjectNewComponent {

  registerForm = this.fb.group({
    name: ''
  })

  constructor (private fb: FormBuilder, private router: Router) {}

  onSubmit () {
    let newProject = {name: this.registerForm.value["name"] || "Default", image: this.randomImage()}
    // console.log(newProject)
    let projects: ProjectInstance[] = JSON.parse(localStorage.getItem("projects") || "[]")
    let index = projects.findIndex((projectInstance) => {
      return newProject.name === projectInstance.name 
    })
    if (index === -1) {
      projects.push(newProject)
      localStorage.setItem("projects", JSON.stringify(projects))
      this.router.navigateByUrl("/")
    }
  }

  randomImage () {
    let num = Math.floor(Math.ceil(Math.random() * 8))
    return "mc" + num.toString() + ".jpg"
  } 

}
