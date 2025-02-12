interface IQuestion {
    question: string;
    choices: string[];
    correctAnswer: string;
}

class Quiz {
    private ourQuestions: IQuestion[] = [
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

    private score: number;
    private qsIndex: number;

    constructor() {
        this.score = 0;
        this.qsIndex = 0;
        this.displayQuestion();

        // Attach event listener to "Next Question" button
        const nextBtn = document.getElementById("next-question");
        if (nextBtn) {
            nextBtn.addEventListener("click", () => this.showNextQuestion());
        }
    }

    getScore(): number {
        return this.score;
    }

    displayQuestion() {
        const questionDisplay = document.getElementById("question-display");
        const answerChoices = document.getElementById("answer-choices");

        if (!questionDisplay || !answerChoices) {
            console.error("Question display or answer choices not found!");
            return;
        }

        const currentQs = this.ourQuestions[this.qsIndex];
        questionDisplay.textContent = currentQs.question;
        answerChoices.innerHTML = ""; // Clear previous choices

        currentQs.choices.forEach(answer => {
            const button = document.createElement("button");
            button.textContent = answer;
            button.addEventListener("click", () => this.checkAnswer(answer));
            answerChoices.appendChild(button);
        });
    }

    checkAnswer(ans: string) {
        if (ans === this.ourQuestions[this.qsIndex].correctAnswer) {
            this.score++;
        }
        this.showNextQuestion();
    }

    showNextQuestion() {
        this.qsIndex++;
        if (this.qsIndex < this.ourQuestions.length) {
            this.displayQuestion();
        } else {
            this.endQuiz();
        }
    }

    endQuiz() {
        const scoreDisplay = document.getElementById("score-display");
        if (scoreDisplay) {
            scoreDisplay.textContent = `Your score is ${this.score} out of ${this.ourQuestions.length}.`;
        }
    }
}

let game = new Quiz();
