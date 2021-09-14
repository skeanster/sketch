let sketch = document.querySelector('#sketch')

// userNumber= document.getElementById('range').value

let eraseGrid = function(number) {
    for (i=(10000); i>(0); i--) {
        var myobj = document.getElementById("cube");
        if (myobj === null) {
            break
        }
        else {
        myobj.remove();
        }
    }
}

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
createGrid(16) 

function makeBlack() {
    this.style.backgroundColor='black'
}

function makeRed() {
    this.style.backgroundColor='#e52521'
  
}

function makeRandom() {

    let n = (Math.random()*0xfffff*1000000).toString(16);
    code = '#' + n.slice(0,6);
    this.style.backgroundColor=code

}

function makeUser(number) {
    let color = x
    this.style.backgroundColor=color
}


let paintRandom = document.querySelectorAll("#cube")
let paintBlack = document.querySelectorAll("#cube")
let paintRed = document.querySelectorAll("#cube")
let paintUser = document.querySelectorAll("#cube")


let resetBlack = function resetBlack() {
    let test =document.querySelectorAll('#cube')
    for (i=0;i<test.length; i++){
        test[i].addEventListener('mouseover', makeBlack)
    }
}


let addListenerBlack = function() {
    let paintBlack = document.querySelectorAll("#cube")

    for (i=0;i<paintBlack.length; i++) {
        paintBlack[i].removeEventListener('mouseover', makeRed)

}
for (i=0;i<paintBlack.length; i++) {
    paintBlack[i].removeEventListener('mouseover', makeBlack)

}
for (i=0;i<paintBlack.length; i++) {
    paintBlack[i].removeEventListener('mouseover', makeRandom)

}
for (i=0;i<paintBlack.length; i++) {
    paintBlack[i].removeEventListener('mouseover', makeUser)

}
for (i=0;i<paintBlack.length; i++) {
    paintBlack[i].addEventListener('mouseover', makeBlack)

}
}



let addListenerRed = function() {
    let paintRed = document.querySelectorAll("#cube")

    for (i=0;i<paintRed.length; i++) {
        paintRed[i].removeEventListener('mouseover', makeRed)

}
for (i=0;i<paintRed.length; i++) {
    paintRed[i].removeEventListener('mouseover', makeBlack)

}
for (i=0;i<paintRed.length; i++) {
    paintRed[i].removeEventListener('mouseover', makeRandom)

}
for (i=0;i<paintRed.length; i++) {
    paintRed[i].removeEventListener('mouseover', makeUser)

}
for (i=0;i<paintRed.length; i++) {
    paintRed[i].addEventListener('mouseover', makeRed)

}
}

let addListenerRandom = function() {
    let paintRandom = document.querySelectorAll("#cube")

    for (i=0;i<paintRandom.length; i++) {
        paintRandom[i].removeEventListener('mouseover', makeRed)

}
for (i=0;i<paintRandom.length; i++) {
    paintRandom[i].removeEventListener('mouseover', makeBlack)

}
for (i=0;i<paintRandom.length; i++) {
    paintRandom[i].removeEventListener('mouseover', makeUser)

}
for (i=0;i<paintRandom.length; i++) {
    paintRandom[i].removeEventListener('mouseover', makeRandom)

}
for (i=0;i<paintRandom.length; i++) {
    paintRandom[i].addEventListener('mouseover', makeRandom)

}

}


let addListenerUser = function(number) {
    let paintUser = document.querySelectorAll("#cube")
    x=number
    console.log(x)

    for (i=0;i<paintUser.length; i++) {
        paintUser[i].removeEventListener('mouseover', makeRed)

}
for (i=0;i<paintUser.length; i++) {
    paintUser[i].removeEventListener('mouseover', makeBlack)

}
for (i=0;i<paintUser.length; i++) {
    paintUser[i].removeEventListener('mouseover', makeUser)

}
for (i=0;i<paintUser.length; i++) {
    paintUser[i].removeEventListener('mouseover', makeRandom)

}

for (i=0;i<paintUser.length; i++) {

paintUser[i].addEventListener('mouseover', function makeUser(number) {
    let color = x
    this.style.backgroundColor=color
})
}
}


addListenerBlack()