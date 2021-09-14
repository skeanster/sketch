let sketch = document.querySelector('#sketch')

userNumber= prompt('grid size?')

let createGrid = function(number) {
    let cubeW= ((1/number)*100)
    let cubeH= ((1/number)*100)

    for (i=0; i<(number*number);i++) {
    let div = document.createElement('cube')
    div.style.width=(cubeW+'%')
    div.style.height=(cubeH+'%')
    div.id = 'cube'
    div.classList.add('white')
    sketch.appendChild(div)
    }
}

createGrid(userNumber) 

function makeBlack() {
    this.classList.remove('white')
    this.classList.add('black')
  
}

const paintBlack = document.querySelectorAll("#cube")

for (i=0;i<paintBlack.length; i++) {
paintBlack[i].addEventListener('mouseover', makeBlack)

}