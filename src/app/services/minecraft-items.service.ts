import { Injectable } from '@angular/core';
import { MinecraftItem } from '../interfaces/minecraftItem';
import items from '../../assets/minecraft-icons/minecraft-block-and-entity.json';

@Injectable({
  providedIn: 'root'
})
export class MinecraftItemsService {
  public items: MinecraftItem[] = items

  constructor() {}

  getLabel(itemId: string) {
    let found = this.items.find(
      (item: MinecraftItem) => {
        return item.name === itemId
      }
    )
    return found?.label
  }

  getCss(itemId:string) {
    let found = this.items.find(
      (item: MinecraftItem) => {
        return item.name === itemId
      }
    )
    return found?.css
  }
}
