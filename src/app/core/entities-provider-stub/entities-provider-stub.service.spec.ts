import { TestBed } from '@angular/core/testing';

import { EntitiesProviderStubService } from './entities-provider-stub.service';

describe('EntitiesProviderStubService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      EntitiesProviderStubService
    ]
  }));

  it('should be created', () => {
    const service: EntitiesProviderStubService = TestBed.get(EntitiesProviderStubService);
    expect(service).toBeTruthy();
  });
});
