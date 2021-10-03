const chai = require('chai');
const expect = chai.expect;

const Vampire = require('../vampire.js');

describe("Vampire", function() {

  let rootVampire;
  beforeEach( function() {
    rootVampire = new Vampire("root");
  });

  describe("numberOfprogeny", () => {

    it("should get the correct number of progeny", () => {
      expect(rootVampire.numberOfprogeny).to.equal(0);
      rootVampire.addprogeny(new Vampire());
      expect(rootVampire.numberOfprogeny).to.equal(1);
      rootVampire.addprogeny(new Vampire());
      rootVampire.addprogeny(new Vampire());
      rootVampire.addprogeny(new Vampire());
      rootVampire.addprogeny(new Vampire());
      expect(rootVampire.numberOfprogeny).to.equal(5);
    });
  });
});
