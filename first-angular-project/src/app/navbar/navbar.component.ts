import { Component } from "@angular/core";

@Component({
    selector: "app-navbar",
    // this is also the standard setting for standalone, so it doesn't really need to be specified here 
    standalone: true,
    // template: ` 
    // <h1>Test 1</h1>
    // <p>Dummy text</p>
    // `,
    // styles: `
    //     h1{color: purple}
    //     p{background: gray}
    // `,

    // external html/css files have priority over inline html/css 
    templateUrl: "./navbar.component.html",
    styleUrl: "./navbar.component.css",
})

export class AppNavbar {

}
