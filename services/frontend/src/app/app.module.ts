import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PubNubAngular} from 'pubnub-angular2';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbChatModule, NbButtonModule, NbInputModule} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {ChatComponent} from './chat/chat.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './chat.service';
import {FormsModule} from '@angular/forms';
import {NgxNotificationModule} from 'ngx-notification';
import { LoginComponent } from './login/login.component';
import { GoogleAutheCallbackComponent } from './google-authe-callback/google-authe-callback.component';

@NgModule({
  declarations: [AppComponent, ChatComponent, LoginComponent, GoogleAutheCallbackComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NbInputModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbChatModule,
    NbButtonModule,
    HttpClientModule,
    FormsModule,
    NgxNotificationModule,
  ],
  providers: [UserService, PubNubAngular],
  bootstrap: [AppComponent],
})
export class AppModule {}
