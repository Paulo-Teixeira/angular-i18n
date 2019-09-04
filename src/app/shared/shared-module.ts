import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ToolbarComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    TranslateModule,
  ],
  exports: [
    ToolbarComponent,
    AppRoutingModule,
    NavigationComponent,
  ],
})
export class SharedModule { }
