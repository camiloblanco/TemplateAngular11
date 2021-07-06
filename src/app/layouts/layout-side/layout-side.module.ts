import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutSideComponent } from './layout-side.component';
import { EmprendimientoComponent } from 'src/app/pages/emprendimiento/emprendimiento.component';
import { EmpleabilidadComponent } from 'src/app/pages/empleabilidad/empleabilidad.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    LayoutSideComponent,
    EmprendimientoComponent,
    EmpleabilidadComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class LayoutSideModule { }
