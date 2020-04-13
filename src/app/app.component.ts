import { Component } from '@angular/core';
import { NavBarComponent } from '../app/nav-bar/nav-bar.component'
import { ShareLinksService } from './share-links.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bassnet-test';
  public otherTheme = false;
  // public finalTheme:Observable<boolean> ;

  constructor(private themeService : ShareLinksService){}
  ngOnInit() {
    this.themeService.sendTheme(this.otherTheme);
    
  }

  changeTheme(theme){
    this.otherTheme = theme === 'dark'? true : false;
    this.themeService.sendTheme(this.otherTheme);
  }
  
  
}
