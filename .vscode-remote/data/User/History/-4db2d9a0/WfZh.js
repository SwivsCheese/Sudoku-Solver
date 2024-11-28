const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
let solver = new Solver();

suite('Unit Tests', () => {
  let val = '5..91372.3...8.5.9.9.25..8.68.47.23...95..46.7.4.....5.2.......4..8916..85.72...3';
  test('valid puzzle of 81 characters', function(done){
    let correct = '568913724342687519197254386685479231219538467734162895926345178473891652851726943';
    assert.equal(solver.solve(val), correct);
    done();

  });

  test('invalid puzzle with invalid characters', function(done){
    let correct = '5..91372.3...8.5.9.9.25..8.68.47.23...95..46.7.4.r...5.2.......4..8916..85.72...3';
    assert.equal(solver.validate(correct), false);
    done();

  });

  test('invalid puzzle thats not 81 in length', function(done){
    let correct = '5..91372.3...8.5.9.9.25..8.68.47.23...95..46.7.4.....5.2.......4..8916..85.72..';
    assert.equal(solver.solve(correct), false);
    done();

  });

  test('valid row placement', function(done){
    assert.equal(solver.checkRowPlacement(val, 'a2', 6), true);
    done();

  });

  test('invalid row placement', function(done){
    assert.equal(solver.checkRowPlacement(val, 'a2', 9), false);
    done();

  });

  test('valid col placement', function(done){
    assert.equal(solver.checkColPlacement(val, 'a2', 4), true);
    done();

  });

  test('invalid col placement', function(done){
    assert.equal(solver.checkColPlacement(val, 'a2', 9), false);
    done();

  });

  test('valid region placement', function(done){
    assert.equal(solver.checkRegionPlacement(val, 'b2', 5), true);
    done();

  });

  test('invalid region placement', function(done){
    assert.equal(solver.checkRegionPlacement(val, 'b2', 9), false);
    done();

  });

  test('valid puzzle string', function(done){
    assert.equal(solver.solve(val), true);
    done();
  });

  test('invalid puzzle string', function(done){
    let egregarious = "5..91372.3...8.5.9.9.25..8.68.47.23...95..46.7.4.....5.2.......4..8916..85.72...3";
    assert.equal(solver.solve(egregarious), false);
    done();
  });
  

  
  
  
  
});
