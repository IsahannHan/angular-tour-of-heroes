import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Tour of Heroes';
  sidenavToggleIcon = 'arrow_left';

  changeSidenavToggleIcon(){
    if(this.sidenavToggleIcon === 'arrow_left'){
      this.sidenavToggleIcon = 'arrow_right';
    }else{
      this.sidenavToggleIcon = 'arrow_left';
    }
  }
}
