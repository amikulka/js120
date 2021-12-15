// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   },
// };

// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }
// let getTurkDescription = turk.getDescription.bind(turk);
// logReturnVal(getTurkDescription);


// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach((title) => {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();


let foo = {
  a: 0,
  incrementA: function() {
    let increment = () => {
      this.a += 1;
    }

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);