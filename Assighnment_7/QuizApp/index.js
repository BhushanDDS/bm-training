var Quiz = /** @class */ (function () {
    function Quiz() {
        this.ourQuestions = [
            {
                question: "Is a cat a human?",
                choices: ["Yes", "Obviously duh", "No", "Get therapy"],
                correctAnswer: "No",
            },
            {
                question: "How many eyes do you have?",
                choices: ["One", "Two", "Three", "Four"],
                correctAnswer: "Two",
            },
            {
                question: "How many noses do you have?",
                choices: ["One", "Two", "Three", "Four"],
                correctAnswer: "One",
            },
            {
                question: "How many hands do you have?",
                choices: ["One", "Two", "Three", "Four"],
                correctAnswer: "Two",
            }
        ];
        this.score = 0;
        this.qsIndex = 0;
        this.displayQuestion();
        this.btnClicker = false;
        this.setupNextButton();
    }
    Quiz.prototype.getScore = function () {
        return this.score;
    };
    Quiz.prototype.displayQuestion = function () {
        var _this = this;
        var questionDisplay = document.getElementById("question-display");
        var answerChoices = document.getElementById("answer-choices");
        if (questionDisplay && answerChoices) {
            var currentQs = this.ourQuestions[this.qsIndex];
            questionDisplay.textContent = currentQs.question;
            answerChoices.innerHTML = "";
            this.btnClicker = false;
            currentQs.choices.forEach(function (answer) {
                var button = document.createElement("button");
                button.id = 'created';
                button.textContent = answer;
                button.addEventListener("click", function () { return _this.checkAnswer(answer); });
                answerChoices.appendChild(button);
            });
        }
    };
    Quiz.prototype.checkAnswer = function (ans) {
        if (!this.btnClicker) {
            this.btnClicker = true; // Mark that the user has answered
            if (ans === this.ourQuestions[this.qsIndex].correctAnswer) {
                this.score++;
            }
            this.showNextQuestion();
        }
    };
    // checkAnswer(ans: string) {
    //         if (ans === this.ourQuestions[this.qsIndex].correctAnswer) {
    //             this.score++;
    //         }
    //         const nextBtn = document.getElementById("next-question");
    //         if (nextBtn) {
    //             nextBtn.addEventListener("click", () => this.showNextQuestion());
    //         //  this.showNextQuestion();
    //     }
    // }
    Quiz.prototype.setupNextButton = function () {
        var _this = this;
        var nextBtn = document.getElementById("next-question");
        if (nextBtn) {
            nextBtn.addEventListener("click", function () { return _this.showNextQuestion(); });
        }
    };
    Quiz.prototype.showNextQuestion = function () {
        if (!this.btnClicker) {
            alert("Please select an answer before proceeding.");
            return;
        }
        this.qsIndex++;
        if (this.qsIndex < this.ourQuestions.length) {
            this.displayQuestion();
        }
        else {
            this.endQuiz();
        }
    };
    Quiz.prototype.endQuiz = function () {
        var _this = this;
        var _a;
        var scoreDisplay = document.getElementById("score-display");
        var nextBtn = document.getElementById("next-question");
        if (scoreDisplay && nextBtn) {
            scoreDisplay.textContent = "Your score is ".concat(this.score, " out of ").concat(this.ourQuestions.length, ".");
            var restartButton_1 = document.createElement('button');
            restartButton_1.textContent = "Restart Game";
            restartButton_1.id = 'restart';
            nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.replaceWith(restartButton_1);
            (_a = document.getElementById('restart')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
                _this.score = 0;
                _this.qsIndex = 0;
                _this.displayQuestion();
                scoreDisplay.textContent = "Score: 0";
                restartButton_1 === null || restartButton_1 === void 0 ? void 0 : restartButton_1.replaceWith(nextBtn);
            });
        }
    };
    return Quiz;
}());
var game = new Quiz();
