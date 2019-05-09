const colors = ['red', 'yellow', 'blue']

document.addEventListener('DOMContentLoaded', function () {
  let paintbrush = ''
  const height = 50;
  const width = 80;
  const board = document.getElementById('board');
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');
  table.appendChild(tableBody)
  board.appendChild(table)

  const palette = document.getElementById('palette');
  
  
  for (let i = 0; i < height; i++) {
    let row = document.createElement('div');
    row.setAttribute('key', `row${i}`)
    for (let j = 0; j < width; j++) {
      let square = document.createElement('td');
      square.setAttribute('class', 'square');
      square.setAttribute('key', `sq${i}${j}`)
      row.appendChild(square);
      square.addEventListener('mousedown', function(e) {
        console.log(paintbrush)
        e.target.style.backgroundColor = paintbrush;
      })
    }
    tableBody.appendChild(row)
  }

  for (let i = 0; i < colors.length; i++) {
    let paletteColor = document.createElement('div');
    paletteColor.setAttribute('class', 'palette-color')
    paletteColor.style.backgroundColor = colors[i];
    palette.appendChild(paletteColor);
    paletteColor.addEventListener('click', function(e) {
      paintbrush = e.target.style['background-color']
    })
  }

  
})