import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { EventsExampleComponent } from './events-example/events-example.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { SampleComponent } from './sample/sample.component';
import { PropertyBindingvsInvterpoletionComponent } from './property-bindingvs-invterpoletion/property-bindingvs-invterpoletion.component';
import { ConditionalStatementsComponent } from './conditional-statements/conditional-statements.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { FormsModule } from '@angular/forms';
import { FormExampleComponent } from './form-example/form-example.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonExampleComponent,
    EventsExampleComponent,
    PropertyBindingComponent,
    SampleComponent,
    PropertyBindingvsInvterpoletionComponent,
    ConditionalStatementsComponent,
    SwitchCaseComponent,
    ForLoopComponent,
    FormExampleComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
