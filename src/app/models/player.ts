import { Card } from "./card";
import { Game } from "./game";

export interface Player {
	id: number;
	name: string;
	commanders: Card[];
	games: Game[];
}