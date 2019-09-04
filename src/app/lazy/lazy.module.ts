import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { AsyncComponent } from './async/async.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AsyncComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    TranslateModule.forChild()
  ],
  exports: [
    AsyncComponent
  ]
})
export class LazyModule { }
