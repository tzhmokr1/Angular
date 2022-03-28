import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { CardComponent } from './card/card.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    CourseComponent,
    TitleCasePipe,
    InputFormatDirective,
    CardComponent,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostComponent,
    GithubFollowersComponent,
    NavbarComponent,
    FavoriteComponent,
    HomeComponent,
    NotfoundComponent,
    GithubProfileComponent,
    ZippyComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers', component: GithubFollowersComponent },
      { path: 'followers/:id/:username', component: GithubProfileComponent },
      { path: 'posts', component: PostComponent },
      { path: 'zippy', component: ZippyComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'new-course', component: NewCourseFormComponent },
      { path: 'course-form', component: CourseFormComponent },
      { path: 'sign-up', component: SignupFormComponent },
      { path: 'contact-form', component: ContactFormComponent },
      { path: 'favorite', component: FavoriteComponent },
      { path: 'like', component: LikeComponent },
      { path: '**', component: NotfoundComponent },
    ]),
  ],
  providers: [
    PostService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
