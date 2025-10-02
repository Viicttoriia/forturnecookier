/*event listener*/
document.getElementById(button).addEventListener('click', function() {
    const name = document.getElementById('Name').ariaValueText;
    const age = document.getElementById('age').ariaValueText;
    const birthmonth = document.getElementById('Birthmonth'),(.ariaValueMin-.ariaValueMax);
    const outputDiv = document.getElementById('fort-output');
}
/* var for output */
if (!Name || !Age || !Birthmonth) {
    outputDiv.textContent = "Please make slection";
    return;
}
/* fortune consts */
const fortunes = [
    "A goblin's shiny bauble is another's misplaced heirloom. Check your pockets.",
    "Beware the gift-bearing goblin; what it gives, it will soon try to get back.",
    "Expect a small, noisy inconvenience. A bigger, louder one is sure to follow.",
    "Today is an excellent day for chaotic, poorly thought-out plans.",
    "Not all who wander are lost, but many who follow goblins are.",
];
/* */
/* */