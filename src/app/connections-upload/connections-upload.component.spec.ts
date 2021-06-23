import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsUploadComponent } from './connections-upload.component';

describe('ConnectionsUploadComponent', () => {
  let component: ConnectionsUploadComponent;
  let fixture: ComponentFixture<ConnectionsUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionsUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
