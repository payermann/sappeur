import { Feldgenerator } from "./feldgenerator.js";
import { check_mine } from "./checkmine.js";
import { question } from "readline-sync";

const mines_number = 5;
const size = 5;
const not_for_user = false;
const for_user = true;

const feld = Feldgenerator(mines_number, size, not_for_user);
const user_feld = Feldgenerator(mines_number, size, for_user);

// console.table(feld);
console.table(user_feld);

while (true) {
  const yx = question("y and x ");
  const y = parseInt(yx[0]);
  const x = parseInt(yx[1]);

  if (feld[y][x] === true) {
    feld[y][x] = "!TRUE!";
    console.table(feld);
    console.log("Game over");
    break;
  }

  user_feld[y][x] = check_mine(feld, y, x);
  console.table(user_feld);
}
