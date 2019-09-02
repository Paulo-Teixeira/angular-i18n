import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports: [
    ToolbarComponent,
    NavigationComponent,
  ],
})
export class SharedModule { }
