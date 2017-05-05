alert('Let’s make a story together!');

var color = prompt('A colour (orange, indigo, etc.)');
var creature = prompt('A creature (dragon, moth, etc.)');
var adjective = prompt('An adjective (beautiful, super, etc.)');
var verbed = prompt('A past tense verb (ran, burped, etc.)');
var story = prompt('Which story would you like? a) Snacking b) Escaping c) Winning Enter the letter below:');

switch(story) {
  case 'a':
    text = 'After snacking on' + adjective + ' treats, the' + color + 'bellied ' + creature + verbed + ' for hours.';
}


/*

A colour (orange, indigo, etc.)



A creature (dragon, moth, etc.)



An adjective (beautiful, super, etc.)



A past tense verb (ran, burped, etc.)



Which story would you like?
a) Snacking
b) Escaping
c) Winning

Enter the letter below:



After snacking on {adjective} treats, the {colour} bellied {creature} {verbed} for hours.

Amelia {verbed} through the {adjective} {colour} nebula escaping the space {creature}.

Jackson chose his {adjective}, {colour} {creature} card and {verbed} it to the table knowing he won.
*/
