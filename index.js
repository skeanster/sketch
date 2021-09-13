let sketch = document.querySelector('#sketch')

let createGrid = function(number) {
    let cubeW= ((1/number)*100)
    let cubeH= ((1/number)*100)

    for (i=0; i<(number*number);i++) {
    let div = document.createElement('cube')
    div.style.width=(cubeW+'%')
    div.style.height=(cubeH+'%')
    div.id = 'cube'
    sketch.appendChild(div)
    }
}

createGrid(32) 

function makeBlack() {
    this.classList.add('black')
  
}

const paintBlack = document.querySelectorAll("#cube")

for (i=0;i<paintBlack.length; i++) {
paintBlack[i].addEventListener('mouseover', makeBlack)

}