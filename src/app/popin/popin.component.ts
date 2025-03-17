import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popin',
  standalone: true,
  imports: [NgIf],
  templateUrl: './popin.component.html',
  styleUrl: './popin.component.scss'
})
export class PopinComponent {
  @Input() player: string = '';
  @Input() isPopinOpened: boolean = true;
  @Input() hasNoWinner: boolean = true;
  @Output() close = new EventEmitter<void>();


  closePopin() {
    this.close.emit();
  }
}
