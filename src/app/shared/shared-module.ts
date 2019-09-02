import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class SharedModule { }
