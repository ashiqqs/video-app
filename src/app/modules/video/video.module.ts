import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { VideoSearchComponent } from './components/video-search/video-search.component';
import { VideoWatchComponent } from './components/video-watch/video-watch.component';


@NgModule({
  declarations: [
    VideoWatchComponent,
    VideoSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})
export class VideoModule { }
