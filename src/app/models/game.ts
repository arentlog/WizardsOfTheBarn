export interface Game {
	id: number;
  gamePlayers: GamePlayer[];
  playDate: Date;
}

export interface GamePlayer {
	// id: number;
	name: string;
	commander: string;
	winner: boolean;
}