import assert from "assert";
import { countAllFromTown } from '../js/countAllFromTown.js';

describe('Test countAllFromTown function', function() {
  it("should return how many registration numbers from Stellies are in the string", function() {
    var fromStellies = countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341', 'CL');
    assert.equal(fromStellies, 3);
  });

  it("should return 0 when there are no registration numbers from the specified town", function() {
    var fromStellies = countAllFromTown('CJ 124,CY 567,CJ 345', 'CL'); // No registrations from 'CL' town
    assert.equal(fromStellies, 0);
  });

  it("should return the count of registration numbers from Kuilsriver that start with 'CF'", function() {
    var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF');
    assert.equal(fromKuilsriver, 1);
  });
});
