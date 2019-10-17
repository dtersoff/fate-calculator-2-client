'use strict'

const Sorter = function () {
  this.classOrder = {
    saber: 1,
    archer: 2,
    lancer: 3,
    rider: 4,
    caster: 5,
    assassin: 6,
    berserker: 7,
    ruler: 8,
    avenger: 9,
    alterego: 10,
    mooncancer: 11,
    shielder: 12
  }
}

Sorter.prototype.normalString = function (className) {
  return className.replace(/\s/g, '').toLowerCase()
}

Sorter.prototype.sortClass = function (a, b) {
  if (this.classOrder[this.normalString(a)] === this.classOrder[this.normalString(b)]) {
    return 0
  }
  if (this.classOrder[this.normalString(a)] > this.classOrder[this.normalString(b)]) {
    return 1
  } else {
    return -1
  }
}

Sorter.prototype.doubleSort = function (servant1, servant2, servants) {
  function findWithAttr (array, attr, value) {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i][attr] === value) {
        return i
      }
    }
    return -1
  }
  // Array sorted by attack
  const attackArray = [...servants].sort((a, b) => (a.atk > b.atk) ? -1 : 1)
  // Array sorted by health
  const healthArray = [...servants].sort((a, b) => (a.hp > b.hp) ? -1 : 1)

  let s1Worst = 0
  let s2Worst = 0
  // If the servant is farther down the `attackArray`, set that index as the
  // worst value, otherwise set the `healthArray` index
  if (findWithAttr(attackArray, '_id', servant1) > findWithAttr(healthArray, '_id', servant1)) {
    s1Worst = findWithAttr(attackArray, '_id', servant1)
  } else {
    s1Worst = findWithAttr(healthArray, '_id', servant1)
  }
  // Do the same for second servant
  if (findWithAttr(attackArray, '_id', servant2) > findWithAttr(healthArray, '_id', servant2)) {
    s2Worst = findWithAttr(attackArray, '_id', servant2)
  } else {
    s2Worst = findWithAttr(healthArray, '_id', servant2)
  }
  // compare the two values and return
  return s1Worst > s2Worst ? 1 : -1
}
// Sorter.prototype.doubleSort = function (servantArray) {
//   const attackArray = [...servantArray].sort((a, b) => (a.atk > b.atk) ? -1 : 1)
//   const healthArray = [...servantArray].sort((a, b) => (a.hp > b.hp) ? -1 : 1)
//
//   // an array that contains 2 lists(arrays), one of all servants sorted desc by
//   // attack, one of all servants sorted desc by hp
//   const arrayHolder = [attackArray, healthArray]
//
//   // list of servants that have shown up once on one of the two lists
//   const checkArray = []
//   const resultArray = []
//
//   // iterates one at a time through the lists. Checks first entry, then second, etc
//   for (let a = 0; a < servantArray.length; a++) {
//     // checks first list at that entry, then second list at that entry
//     for (let b = 0; b < 2; b++) {
//       const servant = arrayHolder[b][a]
//
//       // if the entry I'm looking at is in my check array, then I've already
//       // seen it once. Since this is the second time I've seen it, it's appeared
//       // on both lists
//       if (checkArray.includes(arrayHolder[b][a])) {
//         // it's appeared twice so it goes in the results
//         resultArray.push(servant)
//         // if it wasn't in the checkArray then this is the first time I've seen
//         // it, so I need to remember that I've seen it once...
//       } else {
//         // by adding it to checkArray
//         checkArray.push(servant)
//       }
//     }
//   }
//   return resultArray
// }

export default Sorter
