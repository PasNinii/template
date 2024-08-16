import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'hostiles-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <p>test</p>
    <router-outlet />
  `,
})
export class AppComponent {}
