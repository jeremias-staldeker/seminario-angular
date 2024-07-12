import { Routes } from '@angular/router';
import { HomeComponent } from './views/Home/home.component';
import { GalleryComponent } from './views/Gallery/gallery.component';
import { ArtemisComponent } from './views/Artemis/artemis.component';
import { ArticleComponent } from './views/Article/article.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'galeria', component: GalleryComponent },
  { path: 'artemis', component: ArtemisComponent },
  { path: 'articulo/:id', component: ArticleComponent },
];
