import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, Http} from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { MaterialModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return ;
}

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        MaterialModule,
        HttpModule,
        AppRoutingModule, NoopAnimationsModule
    ],
    providers: [AuthGuard,{ provide: HAMMER_GESTURE_CONFIG, 
                    useClass: MyHammerConfig }],
    bootstrap: [AppComponent]
})
export class AppModule { }

