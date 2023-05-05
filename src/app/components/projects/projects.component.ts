import { Component, OnInit } from '@angular/core';
import { ProjectInstance } from 'src/app/interfaces/projectInstance';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectList: ProjectInstance[]

  constructor () {}

  ngOnInit () {
    this.projectList = JSON.parse(localStorage.getItem("projects") || "[]")
  }

  generateSample () {
    // localStorage.setItem("projects", JSON.stringify([{name:"Default", image:"mc1.jpg"}]))
    // localStorage.setItem("Default", JSON.stringify([{item: "zombie_villager_spawn_egg", count: 10}, {item:"copper_block", count: 50}, {item:"dirt", count: 100}]))
    
    localStorage.setItem("projects", JSON.stringify([{name:"Herobrine", image:"hw.webp"}, {name:"Dirt House", image:"dh.webp"}]))
    localStorage.setItem("Herobrine", JSON.stringify([
      {item:"gold_block", count: 9}, {item:"netherrack", count:1},{item:"redstone_torch", count:4}
    ]))
    localStorage.setItem("Dirt House", JSON.stringify([
      {item:"dirt", count:64}, {item:"oak_door", count:1},{item:"torch", count:4}
    ]))
  
  }

}
