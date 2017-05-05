import {Component} from "@angular/core";

@Component({
    selector: 'angular2spin-app',
    templateUrl: './templates/angular2spin-app.php'
})

export class AppComponent {
    navCollapse = true;

    toggleCollapse() {
        this.navCollapse = !this.navCollapse;
    }
}