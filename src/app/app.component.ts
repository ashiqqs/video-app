import { Component, OnInit } from '@angular/core';
import { SharedService } from './modules/shared/services/shared.service';
import { VideoService } from './modules/video/services/video.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'video-app';

  query: string = '';

  constructor(
    private videoService: VideoService,
    private sharedService: SharedService) {

  }
  ngOnInit(): void {
    this.search();
  }

  search() {
    this.videoService.search(this.query).subscribe(res => {
      this.sharedService.setVideoSearchResult(res.results);
    })
  }

}
