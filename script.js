const question = [
    {
        quea: ' Which method is used to remove the last element from an array ?',
        a: 'shift()',
        b: 'pop()',
        c: 'splice()',
        d: 'remove()',
        answer: 'pop()',
    },
    {
        quea: ' What does typeof null return in JavaScript?',
        a: '"null"',
        b: '"undefined"',
        c: '"object"',
        d: '"boolean"',
        answer: '"object"',
    },
    {
        quea: ' Which of the following is a correct way to declare a constant in JavaScript',
        a: 'constant value = 5;',
        b: 'const value = 5;',
        c: 'var const = 5;',
        d: 'let value: const = 5;',
        answer: 'const value = 5;',
    },
    {
        quea: '  Which array method is used to add one or more elements to the end of an array?',
        a: 'unshift()',
        b: 'concat()',
        c: 'push()',
        d: 'join()',
        answer: 'push()',
    },
];

const questionBox = document.querySelector('#qBox');
const optionInputs = document.querySelectorAll('.option');
const btn = document.querySelector('.btn');
// console.log(question);


let index = 0;
let score = 0;


const loadQuestion = () => {
    const data = question[index];
    // console.log(data);


    questionBox.innerText = `Q ${data.quea}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}
loadQuestion();

btn.addEventListener('click', () => {
    // optionInputs.forEach((e) => {
    //     // console.log(e.checked);
    // })

    const checkAns = document.querySelector('input[type="radio"]:checked')
    // console.log(checkAns.nextElementSibling.innerText);

    if (checkAns === null) {
        alert("Please Check Answer");
    } else {
        if (checkAns.nextElementSibling.textContent === question[index].answer) {
            score++;

        };
    };
    // console.log(score);

    index++;

    const data = question[index];
    if (index < question.length) {
        questionBox.innerText = `Q ${data.quea}`;
        optionInputs[0].nextElementSibling.innerText = data.a;
        optionInputs[1].nextElementSibling.innerText = data.b;
        optionInputs[2].nextElementSibling.innerText = data.c;
        optionInputs[3].nextElementSibling.innerText = data.d;

        checkAns.checked = false;
    } else {
        alert(`Your Score is ${score} out of ${question.length}`);
        location.reload();

    };
});
