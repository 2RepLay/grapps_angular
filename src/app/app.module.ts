import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { FormsModule }   from '@angular/forms';

import {MdButtonModule, MdCheckboxModule, MdCardModule, MdListModule, MdInputModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FileViewComponent} from "./file-view/file-view.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    FileViewComponent
  ],
  imports: [
    BrowserModule, FormsModule, MdCardModule, MdListModule, MdInputModule,
    MdButtonModule, MdCheckboxModule, BrowserAnimationsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
