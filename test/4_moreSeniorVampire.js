const chai = require('chai');
const expect = chai.expect;

const Vampire = require('../vampire.js');

describe("Vampire", function() {

  let rootVampire;
  beforeEach( function() {
    rootVampire = new Vampire("root");
  });

  describe("isMoreSeniorThan", () => {

    let progeny1, progeny2, progeny3, progeny4;
    beforeEach(() => {
      progeny1 = new Vampire();
      progeny2 = new Vampire();
      progeny3 = new Vampire();
      progeny4 = new Vampire();

      rootVampire.addprogeny(progeny1);
      rootVampire.addprogeny(progeny2);
      rootVampire.addprogeny(progeny3);
      progeny3.addprogeny(progeny4);
    });

    it("should return true when called on root vampire", () => {
      expect(rootVampire.isMoreSeniorThan(progeny1)).to.equal(true);
      expect(rootVampire.isMoreSeniorThan(progeny2)).to.equal(true);
      expect(rootVampire.isMoreSeniorThan(progeny3)).to.equal(true);
      expect(rootVampire.isMoreSeniorThan(progeny4)).to.equal(true);
    });

    it("should return false when called with root vampire", () => {
      expect(progeny1.isMoreSeniorThan(rootVampire)).to.equal(false);
      expect(progeny2.isMoreSeniorThan(rootVampire)).to.equal(false);
      expect(progeny3.isMoreSeniorThan(rootVampire)).to.equal(false);
      expect(progeny4.isMoreSeniorThan(rootVampire)).to.equal(false);
    });

    it("should return true when a vampire is more senior", () => {
      expect(progeny3.isMoreSeniorThan(progeny4)).to.equal(true);
    });
    
    it("should return false when a vampire is not more senior", () => {
      expect(progeny4.isMoreSeniorThan(progeny3)).to.equal(false);
    });

  });
});