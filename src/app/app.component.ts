import { Component } from "@angular/core";
declare const I_InitPlugin: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "hikcamera";
}

function Init() {
  I_InitPlugin();
}
