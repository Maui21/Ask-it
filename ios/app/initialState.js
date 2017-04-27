const initialState = {
  allPolls: [{
    id: 1,
    title: 'Pizza or Panckes?',
    context: 'Which would you prefer as drunk munchies?',
    choices: ['Pizza', 'Pancakes']
  }, {
    id: 2,
    title: 'Do ghosts exist?',
    context: 'Ghost: A disembodied consciousness of a dead person',
    choices: ['Ghosts exist', 'Ghosts do not exist']
  }, {
    id: 3,
    title: 'Should a man pay on the first date?',
    context: 'Which would you prefer as drunk munchies?',
    choices: ['A man should pay', 'A man is not obligated to pay', 'Bill should be split']
  }, {
    id: 4,
    title: 'Are you active on online dating?',
    context: 'Ex: Tinder, Match.com, etc...',
    choices: [{name: 'I use internet dating', timesSelected: 0}, {name: 'I do not use internet dating', timesSelected: 0}]
  }],
  selectedPoll: {
    id: 1,
    title: 'Pizza or Panckes?',
    context: 'Which would you prefer as drunk munchies?',
    choices: ['Pizza', 'Pancakes']
  },
  user: {},
}

export default initialState