import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService } from 'src/app/modules/shared/services/shared.service';
import { Video } from '../../models/video.model';
import { VideoService } from '../../services/video.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video-watch',
  templateUrl: './video-watch.component.html',
  styleUrls: ['./video-watch.component.scss']
})
export class VideoWatchComponent implements OnInit {

  suggestedVideos: Video[] = [];
  video: Video;

  videoSubs: Subscription;

  constructor(
    public sharedService: SharedService,
    private videoService: VideoService,
    private sanitizer: DomSanitizer) {
    
  }

  ngOnInit(): void {
    this.video = this.sharedService.getWatchVideo();
    this.getSuggestedVideo();
    
    this.videoSubs = this.sharedService.videoSearchResult$.subscribe(videos => {
      this.suggestedVideos = videos;
      if(videos?.length){
        this.video = videos[0];
        this.sharedService.setWatchVideo(this.video);
      }
    })
  }

  getSanitizeUrl(url: string) {
    const embedUrl = url?.replace('watch?v=', 'embed/');
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  getSuggestedVideo() {
    const tag = this.video?.tags?.length?this.video.tags[0]:this.video.name;
    this.videoService.search(tag).subscribe(res => {
      this.suggestedVideos = res.results;
    })
  }

  watch(video:Video){
    this.sharedService.setWatchVideo(video);
    Object.assign(this.video, video);
    this.getSuggestedVideo();
  }

  ngOnDestroy() {
    this.videoSubs && this.videoSubs?.unsubscribe();
  }
}
