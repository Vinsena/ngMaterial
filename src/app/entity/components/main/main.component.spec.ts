import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ENTITIES_PROVIDER } from '@entity/interfaces/entity-provider';
import { EntitiesProviderStubService } from '@entity/services/entities-provider-stub/entities-provider-stub.service';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      providers: [
        {provide: ENTITIES_PROVIDER, useClass: EntitiesProviderStubService}
      ],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        FormsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
