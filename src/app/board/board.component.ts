import { Component } from '@angular/core';
import { PopinComponent } from '../popin/popin.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [PopinComponent, NgIf, NgFor],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  myBoard = [
    '', '', '',
    '', '', '',
    '', '', ''
  ];
  player = 'X';
  winner = '';
  isPopinOpened = false;
  hasNoWinner = false;

  addSymbol(num: number) {
    if (this.myBoard[num] === '') {
        this.myBoard[num] = this.player;
        
        if (this.determineWinner()) {
            this.winner = this.player;
            this.isPopinOpened = true;
        } else {
            if (this.myBoard.every(val => val !== '')) {
              this.isPopinOpened = true;
              this.hasNoWinner = true;
            }
            this.player = this.player === 'X' ? 'O' : 'X';
        }
    }
  }

  determineWinner(): boolean {
    const winningPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Lignes
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colonnes
      [0, 4, 8], [2, 4, 6] // Diagonales
    ];

    return winningPatterns.some(pattern => {
      const [a, b, c] = pattern;
      return this.myBoard[a] && this.myBoard[a] === this.myBoard[b] && this.myBoard[a] === this.myBoard[c];
    });
  }

  closePopin() {
    this.isPopinOpened = false;
    this.myBoard = Array(9).fill('');
  }
}
