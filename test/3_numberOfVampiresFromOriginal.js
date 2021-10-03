const chai = require('chai');
const expect = chai.expect;

const Vampire = require('../vampire.js');

describe("Vampire", function() {

  let rootVampire;
  beforeEach( function() {
    rootVampire = new Vampire("root");
  });

  describe("numberOfVampiresFromOriginal", () => {

    let progeny1, progeny2, progeny3, progeny4;
    beforeEach(() => {
      progeny1 = new Vampire();
      progeny2 = new Vampire();
      progeny3 = new Vampire();
      progeny4 = new Vampire();

      rootVampire.addprogeny(progeny1);
      progeny1.addprogeny(progeny2);
      progeny2.addprogeny(progeny3);
      progeny3.addprogeny(progeny4);
    });

    it("root should be 0 from original", () => {
      expect(rootVampire.numberOfVampiresFromOriginal).to.equal(0);
    });

    it("progeny 1 should be 1 from original", () => {
      expect(progeny1.numberOfVampiresFromOriginal).to.equal(1);
    });

    it("progeny 2 should be 2 from original", () => {
      expect(progeny2.numberOfVampiresFromOriginal).to.equal(2);
    });

    it("progeny 4 should be 4 from original", () => {
      expect(progeny4.numberOfVampiresFromOriginal).to.equal(4);
    });
  });
});
