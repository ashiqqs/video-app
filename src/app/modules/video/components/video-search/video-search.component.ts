import { Component } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared.service';
import { Video } from '../../models/video.model';

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.scss']
})
export class VideoSearchComponent {

  constructor(public sharedService: SharedService){

  }

  watch(video: Video) {
    this.sharedService.setWatchVideo(video);
  }
}
