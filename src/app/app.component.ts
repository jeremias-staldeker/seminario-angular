import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NasaService } from './services/nasa.service';
import { ArticleService } from './services/article.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [ArticleService, NasaService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'seminario-angular';
}
