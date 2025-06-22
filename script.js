const question = [
    {
        quea: 'Which method is used to remove the last element from an array?',
        a: 'shift()',
        b: 'pop()',
        c: 'splice()',
        d: 'remove()',
        answer: 'pop()',
    },
    {
        quea: 'What does typeof null return in JavaScript?',
        a: '"null"',
        b: '"undefined"',
        c: '"object"',
        d: '"boolean"',
        answer: '"object"',
    },
    {
        quea: 'Which of the following is a correct way to declare a constant in JavaScript?',
        a: 'constant value = 5;',
        b: 'const value = 5;',
        c: 'var const = 5;',
        d: 'let value: const = 5;',
        answer: 'const value = 5;',
    },
    {
        quea: 'Which array method is used to add one or more elements to the end of an array?',
        a: 'unshift()',
        b: 'concat()',
        c: 'push()',
        d: 'join()',
        answer: 'push()',
    },
    {
        quea: 'Which keyword is used to declare a block-scoped variable in JavaScript?',
        a: 'Var',
        b: 'Let',
        c: 'Const',
        d: 'Static',
        answer: 'Let',
    },
    {
        quea: 'Which operator is used to check both value and type in JavaScript?',
        a: '=',
        b: '===',
        c: '==',
        d: '!=',
        answer: '===',
    },
    {
        quea: 'Which of the following is not a JavaScript data type?',
        a: 'Boolean',
        b: 'String',
        c: 'Float',
        d: 'undefined',
        answer: 'Float',
    },
    {
        quea: 'Which keyword is used to define a function in JavaScript?',
        a: 'func',
        b: 'function',
        c: 'define',
        d: 'method',
        answer: 'function',
    },
    {
        quea: 'In JavaScript, which symbol is used for single-line comments?',
        a: '<!-- -->',
        b: '/**/',
        c: '//',
        d: '#',
        answer: '//',
    },
    {
        quea: 'What will be the result of this comparison:"5" == 5?',
        a: 'True',
        b: 'False',
        c: 'error',
        d: 'undefined',
        answer: 'True',
    },
];

const questionBox = document.querySelector('#qBox');
const optionInputs = document.querySelectorAll('.option');
const btn = document.querySelector('.btn');

let index = 0;
let score = 0;


const loadQuestion = () => {
    const data = question[index];

    questionBox.innerText = `Q${index + 1} ${data.quea}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}
loadQuestion();

btn.addEventListener('click', () => {
    const checkAns = document.querySelector('input[type="radio"]:checked')

    if (checkAns === null) {
        alert('Please Check Answer');
    } else {
        if (checkAns.nextElementSibling.textContent === question[index].answer) {
            score++;
        };
    };

    index++;

    const data = question[index];

    if (index < question.length) {
        questionBox.innerText = `Q${index + 1} ${data.quea}`;
        optionInputs[0].nextElementSibling.innerText = data.a;
        optionInputs[1].nextElementSibling.innerText = data.b;
        optionInputs[2].nextElementSibling.innerText = data.c;
        optionInputs[3].nextElementSibling.innerText = data.d;

        checkAns.checked = false;
    } else {
        alert(`Your Score is ${score} out of ${question.length}`);
        location.reload();
    }

});


