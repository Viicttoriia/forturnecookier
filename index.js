/* */
/* Fortune cookie index.js */
/* Victoria Wiley */
/* For codex Academy week Two*/
/* */
/* */
/* */
/*event listener*/
document.getElementById(button).addEventListener('click', function() {
    const name = document.getElementById('Name').ariaValueText;
    const age = document.getElementById('age').ariaValueText;
    const outputDiv = document.getElementById('fort-output');
}
/* var for output */
if (!Name || !Age) {
    outputDiv.textContent = "Please make slecetion";
    return;
}

/* */

/* fortune consts */
const fortunes = [
    "A goblin's shiny bauble is another's misplaced heirloom. Check your pockets.",
    "Beware the gift-bearing goblin; what it gives, it will soon try to get back.",
    "Expect a small, noisy inconvenience. A bigger, louder one is sure to follow.",
    "Today is an excellent day for chaotic, poorly thought-out plans.",
    "Not all who wander are lost, but many who follow goblins are.",
];
/* randomizer */
const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

/* function */

if (age > 7) { introduction = 'Hello, Spellcaster ${Name}! Someone so young of age! Your Fate is not Bound! But here is Todays fortunes.'} else if (age >= 7 && age <20) { introduction = 'Hello Warrior ${Name}! So brave of you to reveal your fate.'} else { introduction = 'GrandMaster ${Name}, Your Fate for the day is Fortold';
}
/* output */

outputDiv.textContent = introduction + randomFortune;
});
