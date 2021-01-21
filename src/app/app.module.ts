import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FileUploadModule} from 'ng2-file-upload';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FileUploaderComponent} from './file-uploader/file-uploader.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FileUploaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileUploadModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
