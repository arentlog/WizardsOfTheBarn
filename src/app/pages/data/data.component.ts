import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Game } from '../../models/game';
import { JsonPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [FormsModule, JsonPipe, CommonModule],
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  games: Game[] = [];
  selectedWinner: number | null = null;
  newGame: Game = {
		id: 0,
    gamePlayers: [
			{ name: '', commander: '', winner: false },
			{ name: '', commander: '', winner: false },
			{ name: '', commander: '', winner: false },
			{ name: '', commander: '', winner: false }
		],
    playDate: new Date()
  };

	ngOnInit() {
		this.games = JSON.parse(localStorage.getItem("games") || "[]");
		console.log("Loaded games from localStorage:", this.games);
	}

  selectWinner(p: number) {
    this.selectedWinner = p;
  }

  saveGame() {
		if (this.selectedWinner == null) {
			alert("Please select a winner before saving the game.");
			return;
		}
		else {
			this.newGame.gamePlayers[this.selectedWinner].winner = true;
		}

		// TODO: Move this to a service and store in a database
		this.newGame.id = new Date().getTime();
		this.games.push(this.newGame);
    localStorage.setItem("games", JSON.stringify(this.games));

		this.resetGame();
  }

	resetGame() {
		this.selectedWinner = null;
		this.newGame = {
			id: 0,
			gamePlayers: [
				{ name: '', commander: '', winner: false },
				{ name: '', commander: '', winner: false },
				{ name: '', commander: '', winner: false },
				{ name: '', commander: '', winner: false }
			],
			playDate: new Date()
		};
	}
}