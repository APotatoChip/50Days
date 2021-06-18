const questions = document.querySelectorAll('.question');
const arrQ = Array.from(questions);
const answers = document.querySelectorAll('.answer');
const arrA = Array.from(answers);
const arrows = document.querySelectorAll('.arrow');
const arrArrows = Array.from(arrows);
answers.forEach(ans => ans.classList.add('hide'));

document.addEventListener('click', (e) => {
    const currClass = e.target.parentNode.classList[0];
    if (currClass === 'question') {
        let currQ = e.target.parentNode;
        let idx = arrQ.indexOf(currQ);
        let currA = arrA[idx];
        let h3 = arrQ[idx].childNodes[1];
        let currArrow = arrArrows[idx];

        currA.classList.toggle('hide');
        h3.classList.toggle('black');
        currArrow.classList.toggle('rotate');


        for (let i = 0; i < idx; i++) {
            arrA[i].classList.add('hide');
            arrQ[i].childNodes[1].classList.remove('black');
            arrArrows[i].classList.remove('rotate');
        }
        for (let i = idx + 1; i < arrQ.length; i++) {
            arrA[i].classList.add('hide');
            arrQ[i].childNodes[1].classList.remove('black');
            arrArrows[i].classList.remove('rotate');
        }
    }

});