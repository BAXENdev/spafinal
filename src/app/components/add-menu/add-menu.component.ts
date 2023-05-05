import { Component, Input, OnInit } from '@angular/core';
import { MinecraftItem } from 'src/app/interfaces/minecraftItem';
import { MinecraftItemsService } from 'src/app/services/minecraft-items.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss', '../../../assets/minecraft-icons/icons-minecraft-0.8.css']
})
export class AddMenuComponent implements OnInit {

  @Input() addToItem: (args: any) => void
  @Input() subtractFromItem: (args: any) => void
  items: MinecraftItem[]

  constructor (private minecraftItemService: MinecraftItemsService) {}

  ngOnInit () {
    this.items = this.minecraftItemService.items
  }

  getMinecraftItems () {
    return this.minecraftItemService.items
  }

}
