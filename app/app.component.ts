import {Component} from "@angular/core";

@Component({
    selector: 'angular2spin',
    templateUrl: './templates/angular2spin.php'
})

export class AppComponent {
    navCollapse = true;

    toggleCollapse() {
        this.navCollapse = !this.navCollapse;
    }
}