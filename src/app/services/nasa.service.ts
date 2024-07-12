import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Image from "../models/Image";

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiKey: string = 'yNqIOZxmenPsdjGK90vlXyjhM02ODAt4ebbeeiFa'

  constructor(private http: HttpClient) { }

  /**
   * @returns Observable<Image>
   */
  public getImageOfTheDay(): Observable<Image> {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return this.http.get<Image>('https://api.nasa.gov/planetary/apod', {
      params: new HttpParams().set('api_key', this.apiKey)
        .set('thumbs', true)
        .set('date', `${year}-${month}-${day}`),
    });
  }

  /**
   * @param count number
   * @returns Observable<Image[]>
   */
  public getImageGallery(count?: number): Observable<Image[]> {
    const imageCount: number = count || 20;
    return this.http.get<Image[]>('https://api.nasa.gov/planetary/apod', {
      params: new HttpParams().set('api_key', this.apiKey).set('count', imageCount).set('thumbs', true),
    });
  }
}