import { Component } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faBars, faExpand, faUpDownLeftRight, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'nav-bar-buttons',
  templateUrl: './nav-bar-buttons.component.html',
  styleUrls: ['./nav-bar-buttons.component.css']
})
export class NavBarButtonsComponent {

  mostrar: boolean = false

  toggle(){
    this.mostrar = !this.mostrar
  }


  faExpand = faUpRightAndDownLeftFromCenter
  faBars = faBars
  public fullscreen: boolean = false;
  public toggleFullscreen(): void {

    this.fullscreen = !this.fullscreen;



    if (this.fullscreen) {

      const docElmWithBrowsersFullScreenFunctions = document.documentElement as HTMLElement & {

        mozRequestFullScreen(): Promise<void>;

        webkitRequestFullscreen(): Promise<void>;

        msRequestFullscreen(): Promise<void>;

      };

      if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {

        docElmWithBrowsersFullScreenFunctions.requestFullscreen();

      } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */

        docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();

      } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */

        docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();

      } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */

        docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();

      }

    } else {

      const docWithBrowsersExitFunctions = document as Document & {

        mozCancelFullScreen(): Promise<void>;

        webkitExitFullscreen(): Promise<void>;

        msExitFullscreen(): Promise<void>;

      };

      if (docWithBrowsersExitFunctions.exitFullscreen) {

        docWithBrowsersExitFunctions.exitFullscreen();

      } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */

        docWithBrowsersExitFunctions.mozCancelFullScreen();

      } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */

        docWithBrowsersExitFunctions.webkitExitFullscreen();

      } else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */

        docWithBrowsersExitFunctions.msExitFullscreen();

      }

    }

  }
  
}
