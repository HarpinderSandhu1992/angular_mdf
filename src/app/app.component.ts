import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { mdfComponent } from "./components/mdf/mdf.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, mdfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_mdf';
}
