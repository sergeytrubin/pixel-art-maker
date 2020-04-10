/**
 * @description declaring table variables
 * @param {element} sizePicker - where the table dimension values
 * @param {element} pixelCanvas - where to draw the table
 */
const sizePicker = document.getElementById("sizePicker");
const pixelCanvas = document.getElementById("pixelCanvas");

/**
 * @description function that draws the table. Second submit will clear the cells
 * using the removeChild(firstChild) loop
 * @param - no need to pass any arguments when calling the function
 *
*/
function makeGrid() {
    /**
     * @description assigning table dimensions to variables
     * @param {number} rows - number of rows in table
     * @param {number} cols - number of cells in table
     */
    let rows = document.getElementById("inputHeight").value;
    let cols = document.getElementById("inputWidth").value;

    // if table already exists - clearing the table
    while (pixelCanvas.firstChild) {
        pixelCanvas.removeChild(pixelCanvas.firstChild);
        }
    // creates the table
    for(row = 0; row < rows; row++) {
        let newRow = pixelCanvas.insertRow(row);
        for(col = 0; col < cols; col++) {
            let cell = newRow.insertCell(col);
            // fills the cell with chosen color
            cell.addEventListener('click', function() {
                const color = document.getElementById('colorPicker').value;
                this.style.backgroundColor = color;
            })
        }
    }
}

/**
* Adding event listener to capture user inpur and draw table.
* preventDefault() will prevent the makeGrid() run until user will submit the form
*/
sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid();
  });