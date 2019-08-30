import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TranslateModule,
    HeaderComponent
  ]
})
export class SharedModule { }
