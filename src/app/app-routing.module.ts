import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoSearchComponent } from './modules/video/components/video-search/video-search.component';
import { VideoWatchComponent } from './modules/video/components/video-watch/video-watch.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full'},
  { path: 'search', component: VideoSearchComponent },
  { path: 'watch', component: VideoWatchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
