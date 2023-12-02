// Advent of Code - Day 2 - Part Two

import { CubeGame } from "./cube-game";

export function part2(input: string): number {
  const games = input.split('\n');
  const cubeGames = new Array<CubeGame>();
  let result = 0;
  games.forEach((game) => {
    cubeGames.push(new CubeGame(game));
  });

  cubeGames.forEach((game) => {
    result += game.totalCount;
  })
  return result;
}
