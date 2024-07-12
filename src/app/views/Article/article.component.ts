import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../../components/Header/header.component";
import { ActivatedRoute, Router } from "@angular/router";
import { ArticleService } from "../../services/article.service";
import Article from "../../models/Article";

@Component({
  standalone: true,
  selector: 'article-component',
  templateUrl: './article.component.html',
  imports: [HeaderComponent, CommonModule],
})
export class ArticleComponent {
  public article: Article | null = null;

  constructor(
    private articleService: ArticleService,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.article = this.articleService.getArticleByID(Number(id) || 0);
  }

  public handleGoBack(): void {
    this.router.navigate(['/inicio']);
  }
};
