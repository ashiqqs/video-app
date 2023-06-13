import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoWatchComponent } from './video-watch.component';

describe('VideoWatchComponent', () => {
  let component: VideoWatchComponent;
  let fixture: ComponentFixture<VideoWatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoWatchComponent]
    });
    fixture = TestBed.createComponent(VideoWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
