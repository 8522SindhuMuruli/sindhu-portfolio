import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language: string = 'en';

  constructor(
    public translateService: TranslateService,
    private location: Location,
  ) {}

  initLanguage(){
    this.translateService.addLangs(["en"])
    const language = "en";
    this.translateService.setDefaultLang(language)

    // Change the URL without navigate:
    this.location.go(language)

    this.language=language
  }

  changeLanguage(language: string){
    // Only English supported
    const newLanguage = "en";
    this.translateService.setDefaultLang(newLanguage)
    this.location.go(newLanguage)
    this.language=newLanguage
  }
}
