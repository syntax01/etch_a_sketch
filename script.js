
function clearGrid() {
    
    // Delete existing grid
    const rows = document.querySelectorAll('.row');
    if(rows) {
        rows.forEach(function(row) {
            row.remove();
        })
    }

}

function buildGrid(gridSize) {

    // Create grid
    for(let i = 0; i < gridSize; i++) {
        // Create row
        const divrow = document.createElement('div');
        container.appendChild(divrow);
        divrow.classList.add('row');
        //divrow.textContent = i;
        // Create column/cell
        for(let j = 0; j < gridSize; j++) {
            const divcol = document.createElement('div');
            divrow.appendChild(divcol);
            divcol.classList.add('col');
            //divcol.textContent = j;
            // Add hover listener
            divcol.addEventListener('mouseover', function(event) {
                // this is the divcol (the thing calling/initiating the function)
                // would also be accessible via the event argument (from addEventListener callback) event.target
                //this.classList.add('hover');
                const rgbR = Math.floor(Math.random()*255);
                const rgbG = Math.floor(Math.random()*255);
                const rgbB = Math.floor(Math.random()*255);
                this.style.backgroundColor = "rgb(" + [rgbR, rgbG, rgbB].join() + ")";
            })
            divcol.addEventListener('mouseout', function(event) {
                const cell = this;
                // After the time variable, you can pass any number of arguments 
                // that you need to be available at setTimeout runtime
                setTimeout(function() {
                    //cell.classList.remove('hover');
                    cell.style.backgroundColor = null;
                }, 500, cell)
            })

        }
    }
}

const container = document.querySelector('#container');
const defaultGridSize = 16;

// Create header
const divhdr = document.createElement('div');
container.appendChild(divhdr);
// Create header button
const hdrbtn = document.createElement('button');
divhdr.appendChild(hdrbtn);
hdrbtn.textContent = "Click to Adjust Grid Size";
// Header button click action
hdrbtn.addEventListener('click', function() {
    let newGridSize = prompt("Grid size - inputer number between 2 and 100", defaultGridSize);
    if(isNaN(newGridSize) || newGridSize < 2 || newGridSize > 100) {
        newGridSize = defaultGridSize;
    }
    clearGrid();
    buildGrid(newGridSize);
})

// Iniitate screen with default grid size
buildGrid(defaultGridSize);

