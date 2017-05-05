alert('Let’s make a story together!');

var color = prompt('A colour (orange, indigo, etc.)');
var creature = prompt('A creature (dragon, moth, etc.)');
var adjective = prompt('An adjective (beautiful, super, etc.)');
var verbed = prompt('A past tense verb (ran, burped, etc.)');
var story = prompt('Which story would you like?\na) Snacking\nb) Escaping\nc) \nWinning Enter the letter below:');

switch (story) {
  case 'a':
    alert('After snacking on ' + adjective + ' treats, the ' + color + ' bellied ' + creature + ' ' + verbed + ' for hours.');

  case 'b':
    alert('Amelia ' + verbed + ' through the ' + adjective + ' ' + colour + ' nebula escaping the space ' + creature + '.');

  case 'c':
    alert('Jackson chose his ' +  adjective + ',' + colour + ' ' + creature + ' card and ' + verbed + 'it to the table knowing he won.');
}
