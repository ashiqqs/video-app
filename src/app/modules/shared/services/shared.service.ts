import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Video } from '../../video/models/video.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private videoSearchResult = new BehaviorSubject<Video[]>([])
  videoSearchResult$ = this.videoSearchResult.asObservable();
  setVideoSearchResult(videos: Video[]) {
    this.videoSearchResult.next(videos);
  }

  setWatchVideo(video: Video) {
    localStorage.setItem('watching', JSON.stringify(video))
  }
  getWatchVideo(): Video {
    const watchVideo = localStorage.getItem('watching');
    const video = JSON.parse(watchVideo) as Video;
    return video;
  }

  
}
