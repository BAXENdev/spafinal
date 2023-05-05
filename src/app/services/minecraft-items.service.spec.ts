import { TestBed } from '@angular/core/testing';

import { MinecraftItemsService } from './minecraft-items.service';

describe('MinecraftItemsService', () => {
  let service: MinecraftItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinecraftItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
