import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar/navbar.component';
import { CreatePostComponent } from './home/create-post/create-post/create-post.component';
import { PostsComponent } from './home/posts/posts/posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './home/auth/login/login.component';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { SignupComponent } from './home/auth/signup/signup.component';
import { AuthInterceptor } from './home/interceptors/auth-interceptor'; //intercepteur des requêtes (vérifier si l'utilisateur est déjà authentifié)
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { EditpostdialogComponent } from './home/edit-post/editpostdialog/editpostdialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FooterComponent } from './home/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CreatePostComponent,
    PostsComponent,
    LoginComponent,
    SignupComponent,
    EditpostdialogComponent,
    FooterComponent,
  ],
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatDialogModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
