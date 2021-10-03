const chai = require('chai');
const expect = chai.expect;

const Vampire = require('../vampire.js');

describe("Vampire", function() {

  let rootVampire;
  beforeEach( function() {
    rootVampire = new Vampire("root");
  });

  describe("addprogeny", () => {

    let progeny1;
    let progeny2;
    beforeEach(() => {
      progeny1 = new Vampire("andrew");
      progeny2 = new Vampire("sarah");
      rootVampire.addprogeny(progeny1);
      rootVampire.addprogeny(progeny2);
    });

    it("should get added to progeny", () => {
      expect(rootVampire.progeny[0]).to.equal(progeny1);
      expect(rootVampire.progeny[1]).to.equal(progeny2);
    });
    it("should add parent as maker", () => {
      expect(progeny1.maker).to.equal(rootVampire);
      expect(progeny2.maker).to.equal(rootVampire);
    });

  });
});