import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navabr/navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';


const routes: Routes = [
  { path: 'sidebar', component: SidebarComponent },
  { path: 'navbar', component: NavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
