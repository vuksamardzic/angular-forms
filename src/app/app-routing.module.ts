import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicRootComponent } from './feature/basic/components/basic-root/basic-root.component';

const routes: Routes = [
  { path: 'index', component: BasicRootComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**', component: BasicRootComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
