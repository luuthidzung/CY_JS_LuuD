const questions = [
    {
        content: "Câu hỏi 1: Đông Lào là nước nào ?",
        answers: [
            "A.Việt Nam",
            "B.Lào",
            "C.Philipine",
            "D.Indonesia"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 2: Tây Lào là nước nào",
        answers: [
            "A.Miến Điện",
            "B.Ấn Độ",
            "C.Nepal",
            "D.Thái Lan"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 3: Nam Lào là nước nào",
        answers: [
            "A.Campuchia",
            "B.Malaysia",
            "C.Singapore",
            "D.Việt Nam"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 4: Bắc Lào là nước nào",
        answers: [
            "A.Trung Quốc",
            "B.Hàn Quốc",
            "C.Nhật Bản",
            "D.Hoa Kỳ"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 5: Lào có bao nhiêu tỉnh thành",
        answers: [
            "A.14",
            "B.15",
            "C.16",
            "D.17"
        ],
        correctAnswer: 1
    },
    {
        content: "Câu hỏi 6: Đâu là thủ đô của Lào",
        answers: [
            "A.Hà Nội",
            "B.Bangkok",
            "C.Vientiane",
            "D.Phnom Penh"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 7: Lào có biển không",
        answers: [
            "A.Có",
            "B.Không",
            "C.Có và không",
            "D.Không và có"
        ],
        correctAnswer: 1
    },
    {
        content: "Câu hỏi 8: Lào có sân bay quốc tế không",
        answers: [
            "A.Có",
            "B.Không",
            "C.Có và không",
            "D.Không và có"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 9: Lào có biên giới với Việt Nam không",
        answers: [
            "A.Có",
            "B.Không",
            "C.Có và không",
            "D.Không và có"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 10: Thủ đô của Brueni là gì",
        answers: [
            "A.Bangkok",
            "B.Bandar Seri Begawan",
            "C.Vientiane",
            "D.Phnom Penh"
        ],
        correctAnswer: 1
    }
];
//khoi tao lop   
      class QuizGame {
        constructor(questions, container) {
            this.questions = questions;
            this.container = container;
            this.currentQuestion = 0;
            this.userAnswers = new Array(questions.length).fill(null);
            this.showResults = false;
            this.render();
        }
// 
        handleAnswer(answerIndex) {
            this.userAnswers[this.currentQuestion] = answerIndex;
            this.render();
        }

        nextQuestion() {
            if (this.currentQuestion < this.questions.length - 1) {
                this.currentQuestion++;
                this.render();
            } else {
                this.showResults = true;
                this.render();
            }
        }

        calculateScore() {
            let correct = 0;
            this.userAnswers.forEach((answer, index) => {
                if (answer === this.questions[index].correctAnswer) {
                    correct++;
                }
            });
            return {
                correct,
                wrong: this.questions.length - correct
            };
        }

        getAnswerClass(answerIndex) {
            const currentAnswer = this.userAnswers[this.currentQuestion];
            if (currentAnswer === null) return '';
            
            const correctAnswer = this.questions[this.currentQuestion].correctAnswer;
            
            if (correctAnswer === answerIndex) {
                return 'correct';
            }
            
            if (currentAnswer === answerIndex && currentAnswer !== correctAnswer) {
                return 'wrong';
            }
            
            if (currentAnswer === answerIndex) {
                return 'selected';
            }
            
            return '';
        }

        
        handleRetry() {
            this.currentQuestion = 0;
            this.userAnswers = new Array(this.questions.length).fill(null);
            this.showResults = false;
            this.render();
        }


        renderQuestion() {
            const question = this.questions[this.currentQuestion];
            const currentAnswer = this.userAnswers[this.currentQuestion];
            const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        
            let html = '<div class="progress-bar">' +
                '<div class="progress" style="width: ' + progress + '%"></div>' +
                '</div>' +
                '<div class="question-info">Câu hỏi ' + (this.currentQuestion + 1) + '/' + this.questions.length + '</div>' +
                '<div class="question-card">' +
                '<div class="question-content">' + question.content + '</div>' +
                '<div class="answers-container">';
        
            question.answers.forEach((answer, index) => {
                const isDisabled = currentAnswer !== null ? 'disabled' : ''; // Disable các đáp án nếu đã chọn
                html += '<div class="answer-option ' + this.getAnswerClass(index) + ' ' + isDisabled + '" ' +
                    (currentAnswer === null ? 'onclick="quizGame.handleAnswer(' + index + ')"' : '') + // Xóa sự kiện onclick nếu đã chọn
                    '>' + answer + '</div>';
            });
        
            html += '</div>';
        
            if (currentAnswer !== null) {
                const isCorrect = currentAnswer === question.correctAnswer;
                html += '<div class="next-btn" onclick="quizGame.nextQuestion()">' +
                    (this.currentQuestion === this.questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo') +
                    '</div>';
            }
        
            html += '</div>';
        
            return html;
        }
        
//render ket qua cuoi cung
        render() {
            if (this.showResults) {
                const score = this.calculateScore();
                const html = '<div class="result-container">' +
                    '<h2>Kết quả</h2>' +
                    '<p>Số câu trả lời đúng: ' + score.correct + '</p>' +
                    '<p>Số câu trả lời sai: ' + score.wrong + '</p>' +
                    '<button class="retry-btn" onclick="quizGame.handleRetry()">' +
                    'Làm lại' +
                    '</button>' +
                    '</div>';
                this.container.innerHTML = html;
            } else {
                this.container.innerHTML = this.renderQuestion();
            }
        }
    }

    // Khởi tạo quiz
    const quizContainer = document.getElementById('quiz-container');
    const quizGame = new QuizGame(questions, quizContainer);