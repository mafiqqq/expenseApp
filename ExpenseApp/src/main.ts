import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

bootstrapApplication(AppComponent);

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
