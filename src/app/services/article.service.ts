import { Injectable } from "@angular/core";
import MOCK_ARTICLES from '../../mock/articles.json';
import Article from "../models/Article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[];

  constructor() {
    this.articles = MOCK_ARTICLES;
  }

  /**
   * @returns Article[]
   */
  public getArticles = (): Article[] => {
    return this.articles;
  };

  /**
   * @param id number
   * @returns Article | null
   */
  public getArticleByID = (id: number): Article | null => {
    const articles = this.getArticles();
    const article = articles.find((art: Article) => art.id === id) || null;
    return article;
  }
}