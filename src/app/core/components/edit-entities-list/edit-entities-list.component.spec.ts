import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEntitiesListComponent } from './edit-entities-list.component';
import { ENTITIES_PROVIDER } from '@core/interfaces/entity-provider';
import { EntitiesProviderStubService } from '@core/services/entities-provider-stub/entities-provider-stub.service';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditEntitiesComponent', () => {
  let component: EditEntitiesListComponent;
  let fixture: ComponentFixture<EditEntitiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEntitiesListComponent ],
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
    fixture = TestBed.createComponent(EditEntitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
