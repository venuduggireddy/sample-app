import { NgModule } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [WelcomeRoutingModule, NzTableModule, CommonModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
