const chai = require("chai");
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', () => {
  test("solve puzzle with valid puzzle string POST", function(done){
    chai
    .request(server)
    .post("/api/solve")
    .send({ puzzle: '5..91372.3...8.5.9.9.25..8.68.47.23...95..46.7.4.....5.2.......4..8916..85.72...3' })
    .end(function(err, res){
      let correct = '568913724342687519197254386685479231219538467734162895926345178473891652851726943';
      assert.equal(res.body.solution, correct);
      done();
    });
  });

  test("solve puzzle with missing puzzle string POST", function(done){
    chai
    .request(server)
    .post("/api/solve")
    .send({ puzzle: '' })
    .end(function(err, res){
      assert.equal(res.body.solution, err);
      done();
    });
  });

  test("solve puzzle with invalid characters string POST", function(done){
    chai
    .request(server)
    .post("/api/solve")
    .send({ puzzle: '5..91372.3...8.5.9.9.25..8.68.47.23...95..46.7.4.r...5.2.......4..8916..85.72...3' })
    .end(function(err, res){
      assert.equal(res.body.solution, err);
      done();
    });
  });

  test("solve puzzle with incorrect length POST", function(done){
    chai
    .request(server)
    .post("/api/solve")
    .send({ puzzle: '5..91372.3...8.5.9.9.25..8.68.47.23...95..46.7.4.r...5.2.......4..8916..85.72..' })
    .end(function(err, res){
      assert.equal(res.body.solution, err);
      done();
    });
  });

  test("solve puzzle that's unsolvable length POST", function(done){
    chai
    .request(server)
    .post("/api/solve")
    .send({ puzzle: '5.591372.3...8.5.9.9.25..8.68.47.23...95..46.7.4.....5.2.......4..8916..85.72...3' })
    .end(function(err, res){
      assert.equal(res.body.solution, err);
      done();
    });
  });

  test("check puzzle placement all fields CHECK", function(done){
    chai
    .request(server)
    .post("/api/check")
    .send({
      puzzle: '5..91372.3...8.5.9.9.25..8.68.47.23...95..46.7.4.....5.2.......4..8916..85.72...3',
      coordinate: 'a2',
      value: "6"
    })
    .end(function(err, res){
      assert.equal(res.body.valid, true);
      done();
    });
  });

  test("check puzzle placement all fields CHECK", function(done){
    chai
    .request(server)
    .post("/api/check")
    .send({
      puzzle: '5..91372.3...8.5.9.9.25..8.68.47.23...95..46.7.4.....5.2.......4..8916..85.72...3',
      coordinate: 'a2',
      value: "6"
    })
    .end(function(err, res){
      assert.equal(res.body.valid, true);
      done();
    });
  });

  test("check puzzle placement single placement conflict CHECK", function(done){
    chai
    .request(server)
    .post("/api/check")
    .send({
      puzzle: '5..91372.3...8.5.9.9.25..8.68.47.23...95..46.7.4.....5.2.......4..8916..85.72...3',
      coordinate: 'b2',
      value: "2"
    })
    .end(function(err, res){
      assert.equal(res.body.valid, false);
      done();
    });
  });

  test("check puzzle placement multiple placement conflicts CHECK", function(done){
    chai
    .request(server)
    .post("/api/check")
    .send({
      puzzle: '5..91372.3...8.5.9.9.25..8.68.47.23...95..46.7.4.....5.2.......4..8916..85.72...3',
      coordinate: 'a2',
      value: "9"
    })
    .end(function(err, res){
      assert.equal(res.body.valid, false);
      done();
    });
  });

  test("check puzzle placement with all placement conflicts CHECK", function(done){
    chai
    .request(server)
    .post("/api/check")
    .send({
      puzzle: '5..91372.3...8.5.9.9.25..8.68.47.23...95..46.7.4.....5.2.......4..8916..85.72...3',
      coordinate: 'a3',
      value: "9"
    })
    .end(function(err, res){
      assert.equal(res.body.valid, false);
      done();
    });
  });

  test("check puzzle placement with missing required fields CHECK", function(done){
    chai
    .request(server)
    .post("/api/check")
    .send({
      puzzle: '5..91372.3...8.5.9.9.25..8.68.47.23...95..46.7.4.....5.2.......4..8916..85.72...3',
      coordinate: '',
      value: "9"
    })
    .end(function(err, res){
      assert.equal(res.body.valid, false);
      done();
    });
  });

  test("check puzzle placement with invalid characters CHECK", function(done){
    chai
    .request(server)
    .post("/api/check")
    .send({
      puzzle: '5..91372.3...8.5.9.9.25..8.68.47.23...95..46.7.4..h..5.2.......4..8916..85.72...3',
      coordinate: 'z3',
      value: "a"
    })
    .end(function(err, res){
      assert.equal(res.body.valid, false);
      done();
    });
  });

  test("check puzzle placement with incorrect length CHECK", function(done){
    chai
    .request(server)
    .post("/api/check")
    .send({
      puzzle: '5..91372.3...8.5.9.9.25..8.68.47.23...95..46.7.4.....5.2.......4..8916..85.72.',
      coordinate: 'b2',
      value: "7"
    })
    .end(function(err, res){
      assert.equal(res.body.valid, false);
      done();
    });
  });

  test("check puzzle placement with invalid placement coordinate length CHECK", function(done){
    chai
    .request(server)
    .post("/api/check")
    .send({
      puzzle: '5..91372.3...8.5.9.9.25..8.68.47.23...95..46.7.4..h..5.2.......4..8916..85.72...3',
      coordinate: 'z2',
      value: "7"
    })
    .end(function(err, res){
      assert.equal(res.body.valid, false);
      done();
    });
  });

});

