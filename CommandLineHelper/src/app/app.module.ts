import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandsComponent } from './commands/commands.component';
import { CommandDetailComponent } from './commands/command-detail/command-detail.component';
import { CommandDetailListComponent } from './commands/command-detail-list/command-detail-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CommandDetailService } from './shared/command-detail.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CommandsComponent,
    CommandDetailComponent,
    CommandDetailListComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CommandDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
