

class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.progeny = [];
    this.maker = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an progeny of this vampire
  addprogeny(progeny) {
    this.progeny.push(progeny);
    progeny.maker = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfprogeny() {
    return this.progeny.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;
    while (currentVampire.maker) {
      currentVampire = currentVampire.maker
      numberOfVampires ++;
    }
    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {

const vamp1 = this.numberOfVampiresFromOriginal;
const vamp2 =  vampire.numberOfVampiresFromOriginal;
if (vamp1 < vamp2) {
  return true;
}
  return false;

  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

module.exports = Vampire;

