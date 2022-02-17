import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        CommonModule
    ],
    exports: [HomeComponent]
})
export class HomeModule { }