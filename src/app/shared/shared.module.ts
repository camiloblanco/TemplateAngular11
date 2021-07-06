import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MyMaterialModule } from './my-material/my-material.module';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MyMaterialModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    MyMaterialModule,],
})
export class SharedModule { }
