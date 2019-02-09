import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityListEditorComponent } from './entity-list-editor.component';
import { ENTITIES_PROVIDER } from 'entity/entity-provider/entity-provider';
import { EntitiesProviderStubService } from 'entity/../../common/services/entities-provider-stub.service';
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
  let component: EntityListEditorComponent;
  let fixture: ComponentFixture<EntityListEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityListEditorComponent ],
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
    fixture = TestBed.createComponent(EntityListEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
