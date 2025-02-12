var Quiz = /** @class */ (function () {
    function Quiz() {
        this.ourQuestions = [{
                question: "is cat a human ",
                choices: ["yes", "obiously duhh", "no", "get threpy"],
                correctAnswer: "two",
            }, {
                question: "how many eyes you have ",
                choices: ["one", "two", "three", "four"],
                correctAnswer: "two",
            }, {
                question: "how many nose you have ",
                choices: ["one", "two", "three", "four"],
                correctAnswer: "one",
            }, {
                question: "how many hands you have ",
                choices: ["one", "two", "three", "four"],
                correctAnswer: "two",
            }];
        this.score = 0;
        this.qsIndex = 0;
        this.displayQuestion();
    }
    // setScore(val:boolean):void{
    //     if(val){
    //         this.score+=1;
    //     }
    //     if(!val){
    //         this.score-=1;
    //     }
    // }
    Quiz.prototype.getScore = function () {
        return this.score;
    };
    Quiz.prototype.displayQuestion = function () {
        var _this = this;
        var questionDisplay = document.getElementById("question-display");
        var answerChoices = document.getElementById("answer-choices");
        var currentQs = this.ourQuestions[this.qsIndex];
        questionDisplay.textContent = currentQs.question; // Non-null assertion (!) since we checked it
        answerChoices.innerHTML = ""; // Clear previous choices
        currentQs.choices.forEach(function (answer) {
            var button = document.createElement('button'); // Create buttons dynamically
            button.textContent = answer;
            button.addEventListener('click', function () { return _this.checkAnswer(answer); });
            answerChoices.appendChild(button); // Add to the container
        });
    };
    Quiz.prototype.checkAnswer = function (ans) {
        var currentQuestion = this.ourQuestions[this.qsIndex];
        if (ans === currentQuestion.correctAnswer) {
            this.score++;
        }
        this.showNextQuestion();
    };
    Quiz.prototype.showNextQuestion = function () {
        this.qsIndex++;
        if (this.qsIndex < this.ourQuestions.length) {
            this.displayQuestion();
        }
        else {
            this.endQuiz();
        }
    };
    Quiz.prototype.endQuiz = function () {
        var scoreDisplay = document.getElementById("score-display");
        scoreDisplay.textContent = "Quiz Finished! Your score is ".concat(this.score, " out of ").concat(this.ourQuestions.length, ".");
    };
    return Quiz;
}());
var game = new Quiz();
