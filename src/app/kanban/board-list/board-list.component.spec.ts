import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsListComponent } from './board-list.component';

describe('BoardListComponent', () => {
  let component: BoardsListComponent;
  let fixture: ComponentFixture<BoardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardsListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
