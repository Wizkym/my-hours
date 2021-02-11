import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { TaskpaneComponent } from './taskpane/taskpane.component';
import { DetailsComponent } from './details/details.component';
import { TaskGridComponent } from './taskpane/task-grid/task-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AuthModalComponent,
    JumbotronComponent,
    TaskpaneComponent,
    DetailsComponent,
    TaskGridComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AuthModalComponent
  ]
})
export class AppModule {}
