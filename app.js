// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM
import { countsAsYes } from './counts-as-a-yes.js';
const button = document.getElementById("button");
const span = document.getElementById("results");
const info = document.getElementById("info-section");
const list = document.getElementById("list");
const banner = document.getElementById("banner");
const main = document.getElementById("main");


button.addEventListener('click', () => {
    const userName = prompt('What is your name?');
    const userHasConfirmed = confirm('Are you ready?');
    if (!userHasConfirmed) {
        alert('Platypus > You');
        return;
    }
        let answerCount = 0;
        const question1 = prompt(`Alright ${userName}, are platypuses mammals?`)
    if (countsAsYes(question1)) {
        answerCount++;
    }
    const question2 = prompt(`Well played ${userName}, now are platypuses venomous?`)
    if (countsAsYes(question2)) {
        answerCount++;
    }

    const question3 = prompt(`Okay ${userName}, do they give live birth?`)
    if (!countsAsYes(question3)) {
        answerCount++;
    }
    const question4 = prompt(`Finally ${userName}, are you cooler than a platypus?`)
    if (!countsAsYes(question4)) {
        answerCount++;
    }
    
alert('Quiz complete! Check the page for your results')
    info.classList.toggle('hidden');
    button.classList.toggle('hidden');
    list.classList.toggle('hidden');
    banner.classList.toggle('hidden');

if (answerCount === 4) {
    span.textContent = `Wow ${userName}, ${answerCount} out of 4 is a perfect score! You are approaching platypus levels of coolness.`;
    main.classList.toggle('content2');
}else{
    span.textContent = `Meh ${userName}, You got ${answerCount} right out of 4. You're still significantly less cool than a platypus.`;
    main.classList.toggle('content3');
}

    })

