function calculateArea (width, height) {
    if (width <= 0) {
        while (width <= 0) {
            console.log("Invalid number, please re-enter width.");
            width = prompt("Width: ");
        };
    };
    if (height <= 0) {
        while (height <= 0) {
            console.log("Invalid number, please re-enter height.");
            height = prompt("Height: ");
        };
    };
    return width * height;
};
console.log(calculateArea(5, 3));
console.log(calculateArea(-10, 7));

function onClick () {
    alert("Button clicked!");
    let button = document.getElementById("buttonID");
    button.style.color = 'white';
    button.style.backgroundColor = 'darkblue';
};

function onLoad () {
    let list = document.getElementById('uList');
    let newItem = document.createElement('li');
    newItem.textContent = "Fourth Item";
    list.appendChild(newItem);
};

function randomizer (gacha) {
    let randomizer = (Math.floor(Math.random() * gacha.length));
    return gacha[randomizer];
}
let list = document.getElementById('uList');
list.addEventListener('click', function () {
    let text = ["1st", "2nd", "3rd", "4th"];
    if (event.target.tagName === 'LI') {
        event.target.textContent = randomizer(text)
    }
})

function changeBackground () {
    let hover = document.getElementById('divider')
    hover.style.backgroundColor = 'lightblue'
}
function resetBackground () {
    let hover = document.getElementById('divider')
    hover.style.backgroundColor = 'plum'
}
function changeBorder () {
    let divElement = document.getElementById('divider')
    divElement.style.borderBlockColor = "royalblue"
}