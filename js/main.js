const images = [
    {name:"apple",img:"images/apple.png"},
    {name:"aubergine",img:"images/aubergine.png"},
    {name:"bacon",img:"images/bacon.png"},
    {name:"beans",img:"images/beans.png"},
    {name:"beetle",img:"images/beetle.png"},
    {name:"bird",img:"images/bird.png"},
    {name:"blueberries",img:"images/blueberries.png"},
    {name:"broccoli",img:"images/broccoli.png"},
    {name:"bubblegum",img:"images/bubblegum.png"},
    {name:"butter",img:"images/butter.png"},
    {name:"candy",img:"images/candy.png"},
    {name:"carrot",img:"images/carrot.png"},
    {name:"cheese",img:"images/cheese.png"},
    {name:"cherries",img:"images/cherries.png"},
    {name:"chili",img:"images/chili.png"},
    {name:"cinnamon-roll",img:"images/cinnamon-roll.png"},
    {name:"clown-fish",img:"images/clown-fish.png"},
    {name:"crab",img:"images/crab.png"},
    {name:"duck",img:"images/duck.png"},
    {name:"elephant",img:"images/elephant.png"},
    {name:"fox",img:"images/fox.png"},
    {name:"frog",img:"images/frog.png"},
    {name:"gingerbread",img:"images/gingerbread.png"},
    {name:"gorilla",img:"images/gorilla.png"},
    {name:"grapes",img:"images/grapes.png"},
    {name:"hazelnut",img:"images/hazelnut.png"},
    {name:"heart",img:"images/heart.png"},
    {name:"ice-cream",img:"images/ice-cream.png"},
    {name:"jelly-beans",img:"images/jelly-beans.png"},
    {name:"koala",img:"images/koala.png"},
    {name:"lion",img:"images/lion.png"},
    {name:"orange",img:"images/orange.png"},
    {name:"pig",img:"images/pig.png"},
    {name:"pinwheel",img:"images/pinwheel.png"},
    {name:"salad",img:"images/salad.png"},
    {name:"wafer",img:"images/wafer.png"},
    {name:"watermelon",img:"images/watermelon.png"},
];
images.sort(() => Math.random()-0.5);

//select a number objects from the images[] array 
let selectedImages = [];
function selectImages(){
    let numberOfimages = 6;

    for (let i = 0; i < numberOfimages; i++) {
        selectedImages.push(images[i]);
        selectedImages.push(images[i]);
    }
    selectedImages.sort(() => Math.random()-0.5);
}
selectImages();

//create img tags to the #box
const box = document.getElementById("box");
function generateImages(){
    for (let i = 0; i < selectedImages.length; i++) {
        let createImg = document.createElement("img");
        box.append(createImg);
        createImg.setAttribute("src", "images/blank.png");
        createImg.setAttribute("data-id",i);
    }
}
generateImages();

//check cards
const cards = document.querySelectorAll("img");
let matchCards = [];
let numCard = [];
cards.forEach(card => card.addEventListener("click",()=>{
    let dataId = card.getAttribute("data-id");
    card.setAttribute("src", selectedImages[dataId].img);

    numCard.push(dataId);
    matchCards.push(selectedImages[dataId].name);
    
    if (matchCards.length === 2) {
        setTimeout(checkCards(), 1000);
    }
    
}));

function checkCards(){
    if(matchCards[0] === matchCards[1]){
        matchCards.pop();
        matchCards.shift();
        numCard.pop();
        numCard.shift();
    }
    else{
        cards[numCard[0]].setAttribute("src", "images/blank.png");
        cards[numCard[1]].setAttribute("src", "images/blank.png");
        matchCards.pop();
        matchCards.shift();
        numCard.pop();
        numCard.shift();
    }
}