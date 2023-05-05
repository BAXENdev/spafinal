import { Component, OnInit } from '@angular/core';
import { ProjectItem } from 'src/app/interfaces/projectItem';
import { MinecraftItemsService } from 'src/app/services/minecraft-items.service';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss', "../../../assets/minecraft-icons/icons-minecraft-0.8.css"]
})
export class ProjectComponent implements OnInit {

  projectName: string
  projectItems: ProjectItem[]
  showAddMenu = true

  constructor (private projectService: ProjectService, private minecraftItemsService: MinecraftItemsService, private route: ActivatedRoute) {}

  ngOnInit () {
    this.projectName = this.route.snapshot.paramMap.get('name') || "";
    this.projectItems = JSON.parse(localStorage.getItem(this.projectName) || "[]")
    console.log("Project items, ", this.projectItems)
  }

  addToItem(itemId: string) {
    let index = this.projectItems.findIndex((projectItem) => {
      if (projectItem.item === itemId) {
        return true
      }
      return false
    })
    if (index < 0) {
      this.projectItems.push({item: itemId, count: 1})
      return
    }
    if (this.projectItems[index].count < 1) {
      this.projectItems.push({item: itemId, count: 1})
    } else {
      this.projectItems[index].count += 1
    }
    console.log(this.projectItems)
  }

  subtractFromItem(itemId: string) {
    let index = this.projectItems.findIndex((projectItem) => {
      if (projectItem.item === itemId) {
        return true
      }
      return false
    })
    if (index < 0) {
      return
    }
    if (this.projectItems[index].count < 2) {
      // delete this.projectItems[index]
      this.projectItems.splice(index, 1)
      return
    }
    this.projectItems[index].count -= 1
  }

  toggleAddMenu() {
    this.showAddMenu = !this.showAddMenu
  }

  getLabel(itemId: string) {
    let ret = this.minecraftItemsService.getLabel(itemId)
    // console.log("Get label " + ret)
    return ret
  }

  getCss(itemId: string) {
    let ret = this.minecraftItemsService.getCss(itemId)
    // console.log("Get css " + ret)
    return ret
  }

  saveProject() {
    localStorage.setItem(this.projectName, JSON.stringify(this.projectItems))
  }

  getMinecraftItems () {
    return this.minecraftItemsService.items
  }
}
