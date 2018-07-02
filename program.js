
//
questions = [
    {category: "animals", answer: "alligator"},
    {category: "animals", answer: "hamster"},
    {category: "animals", answer: "tortoise"},
    {category: "animals", answer: "hippopotamus"},
    {category: "animals", answer: "leopard"},
    {category: "animals", answer: "scorpion"},
    {category: "animals", answer: "snake"},
    {category: "animals", answer: "pigeon"},
    {category: "animals", answer: "squirrel"},
    {category: "body", answer: "stomach"},
    {category: "body", answer: "hands"},
    {category: "body", answer: "elbow"},
    {category: "body", answer: "tongue"},
    {category: "body", answer: "thumb"},
    {category: "body", answer: "shoulders"},
    {category: "computer", answer: "keyboard"},
    {category: "computer", answer: "scanner"},
    {category: "computer", answer: "keyboard"},
    {category: "computer", answer: "software"},
    {category: "computer", answer: "graphic"},
    {category: "computer", answer: "processing"},
    {category: "food", answer: "croissant"},
    {category: "food", answer: "pancakes"},
    {category: "food", answer: "ketchup"},
    {category: "food", answer: "bread"},
    {category: "food", answer: "sandwich"},
    {category: "house", answer: "bathroom"},
    {category: "house", answer: "bookcase"},
    {category: "house", answer: "basement"},
    {category: "house", answer: "furniture"},
    {category: "house", answer: "foundation"},
    {category: "house", answer: "window"},
    {category: "food", answer: "mirror"}
];

var turns = 0;
var errors = 0;
var arrayQuestion = [];

var keyboard = document.getElementById("keyboard");
var letterButton = keyboard.getElementsByClassName("letterButton");
var categoryDiv = document.getElementById("drawn-category");

var answerPlace = document.getElementById("answer");

var randomNumber = Math.floor((Math.random() * questions.length) + 1);
console.log("Answer:", questions[randomNumber].answer);
categoryDiv.innerHTML = (questions[randomNumber].category);
var question = ((questions[randomNumber].answer).toLowerCase());

var questionSplit = question.split("");
var questionLength = question.length;

answerPlace.innerHTML = arrayQuestion;


function arrayQuestionBlank() {
    for (x = 0; x < questionLength; x++) {
        arrayQuestion.push("_");
        arrayQuestion.join(" ");
    }
};

function clickButton() {
    for (i = 0; i < letterButton.length; i++) {
        answerPlace.innerHTML = arrayQuestion.join(" ");

        letterButton[i].addEventListener('click', function (e){
            e.target.disabled = true;
            turns++;
            console.log("Turns :", turns);

            var valueClicked = (e.target.value);
            console.log("Clicked letter :", valueClicked);

            var checkLetter = question.search(valueClicked);

            if (checkLetter != -1) {
                for (x = 0; x <= questionLength; x++) {
                    if (questionSplit[x] == valueClicked) {
                        arrayQuestion[x] = questionSplit[x];
                    }
                }
                answerPlace.innerHTML = arrayQuestion.join(" ");
            }
            else {
                errors++;
                console.log("Errors: ", errors);
                var errorsImg = document.getElementById("errors-img");
                errorsImg.src = sourceImg();
                function sourceImg() {
                    return "images/" + errors + ".png";
                };

                if (errors == 8) {
                    document.getElementById("game-over").style.display = "flex";
                    document.getElementsByClassName("container")[0].classList.add("blur");
                }
            }

            var checker = arrayQuestion.find(checkEmpty);
            function checkEmpty(blankSign) {
                return blankSign == "_";
            }
            if (checker == undefined) {
                document.getElementById("winner").style.display = "flex";
                document.getElementsByClassName("container")[0].classList.add("blur");
            }
        });
    }
}

arrayQuestionBlank()
clickButton()

