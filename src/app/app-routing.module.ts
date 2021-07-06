import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutFullComponent } from './layouts/layout-full/layout-full.component';
import { LayoutSideComponent } from './layouts/layout-side/layout-side.component';
import { HomeComponent } from './pages/home/home.component';
import { EmpleabilidadComponent } from './pages/empleabilidad/empleabilidad.component';
import { EmprendimientoComponent } from './pages/emprendimiento/emprendimiento.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutFullComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: '',
    component: LayoutSideComponent,
    children: [
      {
        path: 'empleabilidad',
        component: EmpleabilidadComponent,
      },
      {
        path: 'emprendimiento',
        component: EmprendimientoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
