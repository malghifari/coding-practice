// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require('./program');
const chai = require('chai');

function sortAndStringify(array) {
  return array.sort((a, b) => a - b).join(',');
}

it('Test Case #1', function() {
  let output = program.fourNumberSum([1, 2, 3, 4, 5, 6, 7], 10);
  output = output.map(sortAndStringify);
  const quadruplets = [[1, 2, 3, 4]];
  chai.expect(output.length === 1).to.be.true;
  for (const quadruplet of quadruplets) {
    chai.expect(output).to.include(sortAndStringify(quadruplet));
  }
});

it('Test Case #2', function() {
  let output = program.fourNumberSum([7, 6, 4, -1, 1, 2], 16);
  output = output.map(sortAndStringify);
  const quadruplets = [
    [7, 6, 4, -1],
    [7, 6, 1, 2],
  ];
  chai.expect(output.length === 2).to.be.true;
  for (const quadruplet of quadruplets) {
    chai.expect(output).to.include(sortAndStringify(quadruplet));
  }
});

it('Test Case #3', function() {
  let output = program.fourNumberSum([5, -5, -2, 2, 3, -3], 0);
  output = output.map(sortAndStringify);
  const quadruplets = [
    [5, -5, -2, 2],
    [5, -5, 3, -3],
    [-2, 2, 3, -3],
  ];
  chai.expect(output.length === 3).to.be.true;
  for (const quadruplet of quadruplets) {
    chai.expect(output).to.include(sortAndStringify(quadruplet));
  }
});

it('Test Case #4', function() {
  let output = program.fourNumberSum([-2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4);
  output = output.map(sortAndStringify);
  const quadruplets = [
    [-2, -1, 1, 6],
    [-2, 1, 2, 3],
    [-2, -1, 2, 5],
    [-2, -1, 3, 4],
  ];
  chai.expect(output.length === 4).to.be.true;
  for (const quadruplet of quadruplets) {
    chai.expect(output).to.include(sortAndStringify(quadruplet));
  }
});

it('Test Case #5', function() {
  let output = program.fourNumberSum([-1, 22, 18, 4, 7, 11, 2, -5, -3], 30);
  output = output.map(sortAndStringify);
  const quadruplets = [
    [-1, 22, 7, 2],
    [22, 4, 7, -3],
    [-1, 18, 11, 2],
    [18, 4, 11, -3],
    [22, 11, 2, -5],
  ];
  chai.expect(output.length === 5).to.be.true;
  for (const quadruplet of quadruplets) {
    chai.expect(output).to.include(sortAndStringify(quadruplet));
  }
});

it('Test Case #6', function() {
  let output = program.fourNumberSum([-10, -3, -5, 2, 15, -7, 28, -6, 12, 8, 11, 5], 20);
  output = output.map(sortAndStringify);
  const quadruplets = [
    [-5, 2, 15, 8],
    [-3, 2, -7, 28],
    [-10, -3, 28, 5],
    [-10, 28, -6, 8],
    [-7, 28, -6, 5],
    [-5, 2, 12, 11],
    [-5, 12, 8, 5],
  ];
  chai.expect(output.length === 7).to.be.true;
  for (const quadruplet of quadruplets) {
    chai.expect(output).to.include(sortAndStringify(quadruplet));
  }
});

it('Test Case #7', function() {
  let output = program.fourNumberSum([1, 2, 3, 4, 5], 100);
  output = output.map(sortAndStringify);
  chai.expect(output.length === 0).to.be.true;
});
