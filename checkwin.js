export function checkWin(user_feld, feld) {
  let win = true;
  for (let y_line in user_feld) {
    for (let x_line in user_feld[y_line]) {
      if (
        (user_feld[y_line][x_line] === " " || "!FLAG!") &&
        feld[y_line][x_line] !== true
      ) {
        win = false;
      }
    }
  }
  return win;
}
