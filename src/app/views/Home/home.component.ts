import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../../components/Header/header.component";
import { ArticleService } from "../../services/article.service";
import { Router } from "@angular/router";
import Article from "../../models/Article";

@Component({
  standalone: true,
  selector: 'home-component',
  templateUrl: './home.component.html',
  imports: [HeaderComponent, CommonModule],
})
export class HomeComponent {
  articles: Article[] = [];

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
    console.log(this.articles);
  }

  /**
   * @param id number
   */
  public openArticle(id: number): void {
    this.router.navigate(['/articulo', id]);
  }
};
