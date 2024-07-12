interface Article {
  id: number;
  title: string;
  date: string;
  summary: string;
  paragraphA: string;
  paragraphB: string;
  paragraphC: string;
  readingTime: string;
  imageUrl?: string;
  imageAlt?: string;
}

export default Article;
