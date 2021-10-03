const chai = require('chai');
const expect = chai.expect;

const Vampire = require('../vampire.js');

describe("Vampire", function() {

  let rootVampire;
  beforeEach( function() {
    rootVampire = new Vampire("root");
  });

  describe("closestCommonAncestor", function() {

    let progeny1, progeny2, progeny3, progeny4, progeny5, progeny6, progeny7, progeny8;
    beforeEach(() => {
      progeny1 = new Vampire("a");
      progeny2 = new Vampire("b");
      progeny3 = new Vampire("c");
      progeny4 = new Vampire("d");
      progeny5 = new Vampire("e");
      progeny6 = new Vampire("f");
      progeny7 = new Vampire("g");
      progeny8 = new Vampire("h");

      rootVampire.addprogeny(progeny1);
      rootVampire.addprogeny(progeny2);
      rootVampire.addprogeny(progeny3);
      progeny3.addprogeny(progeny4);
      progeny3.addprogeny(progeny5);
      progeny5.addprogeny(progeny6);
      progeny6.addprogeny(progeny7);
      progeny2.addprogeny(progeny8);
    });

    it("should be the root vampire for any vampire and the root vampire", () => {
      expect(rootVampire.closestCommonAncestor(progeny2).name).to.equal(rootVampire.name);
      expect(rootVampire.closestCommonAncestor(progeny7).name).to.equal(rootVampire.name);
    })

    it("should be the root vampire for first two progeny", () => {
      expect(progeny1.closestCommonAncestor(progeny2).name).to.equal(rootVampire.name);
    })

    it("should be progeny 3 for progeny 4 and 7", () => {
      expect(progeny4.closestCommonAncestor(progeny7).name).to.equal(progeny3.name);
      expect(progeny7.closestCommonAncestor(progeny4).name).to.equal(progeny3.name);
    })

    it("should be that vampire if same vampire is used", () => {
      expect(progeny4.closestCommonAncestor(progeny4).name).to.equal(progeny4.name);
    })

    it("should be the more senior vampire if a direct ancestor is used", () => {
      expect(progeny6.closestCommonAncestor(progeny7).name).to.equal(progeny6.name);
      expect(progeny7.closestCommonAncestor(progeny6).name).to.equal(progeny6.name);
    })

    it("should be root for progeny 8 and progeny 7", () => {
      expect(progeny7.closestCommonAncestor(progeny8).name).to.equal(rootVampire.name);
      expect(progeny8.closestCommonAncestor(progeny7).name).to.equal(rootVampire.name);
    })
  });
});
