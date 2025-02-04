export function Feldgenerator(mines_number, size, for_user) {
  let field = [];

  for (let y = 0; y < size; y++) {
    field[y] = [];
    for (let x = 0; x < size; x++) {
      field[y][x] = " ";
    }
  }

  if (for_user) {
    return field;
  }

  for (let mine = 0; mine < mines_number; mine++) {
    let x = Math.floor(Math.random() * size);
    let y = Math.floor(Math.random() * size);
    field[y][x] = true;
  }

  return field;
}
