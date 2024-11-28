'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      let valid = true;
      let conflict = []
      let coordinate = req.body.coordinate;
      let value = req.body.value;
      //console.log(coordinate, "COORDINATE", value, "VALUE");
      if(coordinate == undefined || value == undefined || req.body.puzzle == undefined){
        return res.send({ error: 'Required field(s) missing' });
      };
      
      if(/[^1-9.]+/g.test(String(req.body.puzzle))){
        return res.send({ error: 'Invalid characters in puzzle' });
      };

      if(req.body.puzzle.length != 81){
        return res.send({ error: 'Expected puzzle to be 81 characters long' });
      };
      
      if(/[^a-iA-I1-9]+/g.test(coordinate) || coordinate.length != 2){
        return res.send({ error: 'Invalid coordinate' });
      };

      if(/[^1-9]+/g.test(value)){
        return res.send({ error: 'Invalid value' });
      };

      let rower = solver.checkRowPlacement(req.body, coordinate, value);
      let coller = solver.checkColPlacement(req.body, coordinate, value);
      let regioner = solver.checkRegionPlacement(req.body, coordinate, value);

      if(rower == false){
        valid = false;
        conflict.push("row");
      };
      if(coller == false){
        valid = false;
        conflict.push("column");
      };
      if(regioner == false){
        valid = false;
        conflict.push("region");
      };
      
      if(conflict.length > 0){
        console.log(coordinate, value, valid, conflict);
        return res.json({ valid: valid, conflict: conflict });
      }
      else{
        console.log(coordinate, value, valid);
        return res.json({ valid: valid });
      }
    });
    
    
  app.route('/api/solve')
    .post((req, res) => {
      console.log(req.body.puzzle);
      if(!req.body.puzzle){
        return res.json({ error: 'Required field missing' });
      };

      if(!solver.validate(req.body)){
        return res.send({ error: 'Invalid characters in puzzle' });
      };

      if(req.body.puzzle.length != 81){
        return res.send({ error: 'Expected puzzle to be 81 characters long'});
      };
      try{
        let yo = solver.solve(req.body.puzzle);
        if(!yo == []){
          return res.json({solution: yo});
        }
        else{
          return res.send({ error: 'Puzzle cannot be solved' })
        }
      }
      catch(err){
        return res.send({ error: 'Puzzle cannot be solved' })

      }
      
      

    });
};
