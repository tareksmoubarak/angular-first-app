import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './UserComponents/user/user.component';
import { PostsComponent } from './PostsComponents/posts/posts.component';

const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'posts', component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
