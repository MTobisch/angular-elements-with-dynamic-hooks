import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicHooksModule } from 'ngx-dynamic-hooks';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [DynamicHooksModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  @Input() origin: string|null = null;
  @Output() onClick: EventEmitter<string> = new EventEmitter();
  contentString=`
    <div class='dynamic-div'>
      <p>This is the dynamic content string!</p>
      <p>And here is a dynamically-loaded component:</p>
      <app-fish></app-fish>
    </div>
  `;
}