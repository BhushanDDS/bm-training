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
    private btnClicker:boolean;

    constructor() {
        this.score = 0;
        this.qsIndex = 0;
        this.displayQuestion();
        this.btnClicker=false;
        this.setupNextButton();
       

       
    }

    
    
    getScore(): number {
        return this.score;
    }

    displayQuestion() {
        const questionDisplay = document.getElementById("question-display");
        const answerChoices = document.getElementById("answer-choices");

     

        if(questionDisplay && answerChoices){
            const currentQs = this.ourQuestions[this.qsIndex];
            questionDisplay.textContent = currentQs.question;
            answerChoices.innerHTML = ""; 
            this.btnClicker=false;
            currentQs.choices.forEach(answer => {
                const button = document.createElement("button");
                button.id='created';
                button.textContent = answer;
                button.addEventListener("click", () => this.checkAnswer(answer)) ;
                answerChoices.appendChild(button);
            });
        }

        
    }

    

    checkAnswer(ans: string) {
        if (!this.btnClicker) {
            this.btnClicker = true; 
            if (ans === this.ourQuestions[this.qsIndex].correctAnswer) {
                this.score++;
            }
            this.showNextQuestion()

        }
    }

    setupNextButton() {
        const nextBtn = document.getElementById("next-question");
        if (nextBtn) {
            nextBtn.addEventListener("click", () => this.showNextQuestion());
        }
    }

    showNextQuestion() {

        if (!this.btnClicker) {
            alert("Please select an answer before proceeding.");
            return;
        }

        this.qsIndex++;
        if (this.qsIndex < this.ourQuestions.length) {
            this.displayQuestion();
        } else {
            this.endQuiz();
        }
    }

    endQuiz() {
        
        const scoreDisplay = document.getElementById("score-display");
        const nextBtn = document.getElementById("next-question");
        if (scoreDisplay && nextBtn) {

            scoreDisplay.textContent = `Your score is ${this.score} out of ${this.ourQuestions.length}.`;
            const restartButton= document.createElement('button');
            restartButton.textContent="Restart Game"
            restartButton.id='restart';
            nextBtn?.replaceWith(restartButton);

            document.getElementById('restart')?.addEventListener('click',()=>{
                this.score = 0;
                this.qsIndex = 0;
                this.displayQuestion();
                scoreDisplay.textContent="Score: 0"
                restartButton?.replaceWith(nextBtn);
                
            })
            


        }
    }
}

let game = new Quiz();
