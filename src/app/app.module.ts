import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { EventsExampleComponent } from './events-example/events-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonExampleComponent,
    EventsExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
