var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

    var questions = [
        {
            question: "Question 1",
            answers: {
                a: 'answer 1a',
                b: 'answer 1b',
                c: 'answer 1c'
            },
            correctAnswer: 'a'
        },
        {
            question: "Question 2",
            answers: {
                a: 'answer 2a',
                b: 'answer 2b',
                c: 'answer 2c'
            },
            correctAnswer: 'b'
        }
        {
            question: "Question 3",
            answers: {
                a: 'answer 3a',
                b: 'answer 3b',
                c: 'answer 3c'
            },
            correctAnswer: 'c'
        }
    ];
    $('questions[1]').show();