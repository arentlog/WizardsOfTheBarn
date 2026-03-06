import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WizardsComponent } from './pages/wizards/wizards.component';
import { DataComponent } from './pages/data/data.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wizards', component: WizardsComponent },
  { path: 'data', component: DataComponent }
];