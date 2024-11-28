const { json } = require("body-parser");

class SudokuSolver {

  validate(puzzleString) {
    // see if all characters are valid in the string
    if(puzzleString.puzzle.match(/[^1-9.]+/g)){
      // invalid character in the puzzle
      
      return f;
    };
    return puzzleString.puzzle;
  }

  checkRowPlacement(puzzleString, coordinate, value) {
    let booler = true;
    if(!coordinate){
      booler = false;
      return;
    }
    let row = coordinate[0].toUpperCase();
    let col = coordinate[1] - 1;
    const map = new Map([["A", 0],["B", 1],["C", 2],["D", 3],["E", 4],["F", 5],["G", 6],["H", 7],["I", 8]]);
    row = map.get(row);
    if(row == undefined){
      booler = false;
      return;
    }
    let jonny = [];
    for(let i=0; i <= puzzleString.puzzle.length; i+=1){
      if(i % 9 == 0 || i == 81){
        jonny.push(newArray);
        var newArray = [];
        newArray.push(puzzleString.puzzle[i]);
      }
      else{
        newArray.push(puzzleString.puzzle[i]);
      }
    };
    let better = jonny.filter(elem => elem != undefined);

    if(/\d+/g.test(better[row][col])){
      //console.log("this is already a num");
      return booler;
    }

    better[row].forEach(elem => {
      if(elem == value){
        booler = false;
        return;
      }
    });

    return booler;
  }

  checkColPlacement(puzzleString, coordinate, value) {
    let booler = true;
    if(!coordinate){
      booler = false;
      return;
    }
    let row = coordinate[0].toUpperCase();
    let col = coordinate[1] - 1;
    const map = new Map([["A", 0],["B", 1],["C", 2],["D", 3],["E", 4],["F", 5],["G", 6],["H", 7],["I", 8]]);
    row = map.get(row);
    if(row == undefined){
      booler = false;
    };
    let jonny = [];
    for(let i=0; i <= puzzleString.puzzle.length; i+=1){
      if(i % 9 == 0 || i == 81){
        jonny.push(newArray);
        var newArray = [];
        newArray.push(puzzleString.puzzle[i]);
      }
      else{
        newArray.push(puzzleString.puzzle[i]);
      }
    };
    let better = jonny.filter(elem => elem != undefined);

    if(/\d+/g.test(better[row][col])){
      //console.log("this is already a num");
      return booler;
    };
    
    for(let id=0; id < 9; id++){
      if(better[id][col] == value){
        booler = false;
      };
    };
    return booler;
  }

  checkRegionPlacement(puzzleString, coordinate, value) {
    let booler = true;
    if(!coordinate){
      booler = false;
      return;
    }
    let row = coordinate[0].toUpperCase();
    let col = coordinate[1] - 1;
    let nums = []
    const map = new Map([["A", 0],["B", 1],["C", 2],["D", 3],["E", 4],["F", 5],["G", 6],["H", 7],["I", 8]]);
    row = map.get(row);
    if(row == undefined){
      booler = false;
      return;
    };
    let jonny = [];
    for(let j=0; j <= puzzleString.puzzle.length; j+=1){
      if(j % 9 == 0 || j == 81){
        jonny.push(newArray);
        var newArray = [];
        newArray.push(puzzleString.puzzle[j]);
      }
      else{
        newArray.push(puzzleString.puzzle[j]);
      }
    };
    let better = jonny.filter(elem => elem != undefined);

    if(/\d+/g.test(better[row][col])){
      //console.log("this is already a num", better[row][col]);
      return booler;
    };

    function regioner(){
      if(row < 3){
        // if in rows A-C
        if(col < 3){
          // if in cols 1-3
          for(let i=0; i < 3; i+=1){
            for(let j=0; j < 3; j+=1){
              nums.push(better[i][j]);
            }
          }
        //console.log(nums);
        return;
        }
        if(col < 6){
          // if in cols 4-6
          for(let i=0; i < 3; i+=1){
            for(let j=3; j < 6; j+=1){
              nums.push(better[i][j]);
            }
          }
        //console.log(nums);
        return;  
        
        }
        else{
          // if in cols 7-9
          for(let i=0; i < 3; i+=1){
            for(let j=6; j < 9; j+=1){
              nums.push(better[i][j]);
            }
          }
        //console.log(nums);
        return; 
        
        }
      }
  
      if(row < 6){
        // if in rows D-F
        if(col < 3){
          // if in cols 1-3
          for(let i=3; i < 6; i+=1){
            for(let j=0; j < 3; j+=1){
              nums.push(better[i][j]);
            }
          }
        //console.log(nums);
        return; 
        }
        if(col < 6){
          // if in cols 4-6
          for(let i=3; i < 6; i+=1){
            for(let j=3; j < 6; j+=1){
              nums.push(better[i][j]);
            }
          }
        //console.log(nums);  
        return; 
        }
  
        else{
          // if in cols 7-9
          for(let i=3; i < 6; i+=1){
            for(let j=6; j < 9; j+=1){
              nums.push(better[i][j]);
            }
          }
        return; 
        }
      }
      else{
        // if in rows G-I
        if(col < 3){
          // if in cols 1-3
          for(let i=6; i < 9; i+=1){
            for(let j=0; j < 3; j+=1){
              nums.push(better[i][j]);
            }
          }
        //console.log(nums);
        return; 
        }
  
        if(col < 6){
          // if in cols 4-6
          for(let i=6; i < 9; i+=1){
            for(let j=3; j < 6; j+=1){
              nums.push(better[i][j]);
            }
          }
        //console.log(nums);  
        return; 
        }
  
        else{
          // if in cols 7-9
          for(let i=6; i < 9; i+=1){
            for(let j=6; j < 9; j+=1){
              nums.push(better[i][j]);
            }
          }
        //console.log(nums);
        return; 
        }
      }
    }
    regioner()
    nums.forEach((a) => {
      if(a == value){
        booler = false;
        return;
      }
    });
    return booler;
  }

  solve(puzzleString) {
    let jonny = [];
    for(let i=0; i <= puzzleString.puzzle.length; i+=1){
      if(i % 9 == 0 || i == 81){
        jonny.push(newArray);
        var newArray = [];
        newArray.push(puzzleString.puzzle[i]);
      }
      else{
        newArray.push(puzzleString.puzzle[i]);
      }
    };
    let better = jonny.filter(elem => elem != undefined);
    let diffArr = [];

    function caller(elem, arr, pos){
      let thisSet = new Set([]);

      if(/\d+/g.test(elem) && typeof(elem) != 'object'){
        // if elem is a number, skip over it
        return;
      }

      let rows = rowers(arr[pos[0]]);
      let cols = collers(arr, pos[1]);
      let regions = regioners(arr, pos);

      rows.forEach(a => thisSet.add(a));
      cols.forEach(a => thisSet.add(a));
      regions.forEach(a => thisSet.add(a));
      
      arr = placer(thisSet, better, pos);
      return arr;
    };

    function rowers(pos){
      // rows ofcourse
      // get position
      // search entire row
      // return nums that it cannot be
      return pos;

    };
    
    function collers(arr, j){
      // cols ofcourse
      // get position
      // search entire column
      // return nums that it cannot be
      const nums = [];

      arr.forEach((a, b) => {
        nums.push(arr[b][j]);
      });
      return nums;
    };
    
    function regioners(arr, pos){
      // region ofcourse
      // get position
      // search entire region
      // return nums that it cannot be
      const nums = [];


      if(pos[0] < 3){
        // if in rows A-C
        if(pos[1] < 3){
          // if in cols 1-3
          for(let i=0; i < 3; i+=1){
            for(let j=0; j < 3; j+=1){
              nums.push(arr[i][j]);
            }
          }
        //console.log(nums);
        return nums;
        }

        if(pos[1] < 6){
          // if in cols 4-6
          for(let i=0; i < 3; i+=1){
            for(let j=3; j < 6; j+=1){
              nums.push(arr[i][j]);
            }

          }
        //console.log(nums);  
        return nums;
        }

        else{
          // if in cols 7-9
          for(let i=0; i < 3; i+=1){
            for(let j=6; j < 9; j+=1){
              nums.push(arr[i][j]);
            }
          }
        //console.log(nums);
        return nums;
        }
      }


      if(pos[0] < 6){
        // if in rows D-F
        if(pos[1] < 3){
          // if in cols 1-3
          for(let i=3; i < 6; i+=1){
            for(let j=0; j < 3; j+=1){
              nums.push(arr[i][j]);
            }
          }
        //console.log(nums);
        return nums;
        }

        if(pos[1] < 6){
          // if in cols 4-6
          for(let i=3; i < 6; i+=1){
            for(let j=3; j < 6; j+=1){
              nums.push(arr[i][j]);
            }

          }
        //console.log(nums);  
        return nums;
        }

        else{
          // if in cols 7-9
          for(let i=3; i < 6; i+=1){
            for(let j=6; j < 9; j+=1){
              nums.push(arr[i][j]);
            }
          }
        //console.log(nums);
        return nums;
        }
      }


      else{
        // if in rows G-I
        if(pos[1] < 3){
          // if in cols 1-3
          for(let i=6; i < 9; i+=1){
            for(let j=0; j < 3; j+=1){
              nums.push(arr[i][j]);
            }
          }
        //console.log(nums);
        return nums;
        }

        if(pos[1] < 6){
          // if in cols 4-6
          for(let i=6; i < 9; i+=1){
            for(let j=3; j < 6; j+=1){
              nums.push(arr[i][j]);
            }

          }
        //console.log(nums);  
        return nums;
        }

        else{
          // if in cols 7-9
          for(let i=6; i < 9; i+=1){
            for(let j=6; j < 9; j+=1){
              nums.push(arr[i][j]);
            }
          }
        //console.log(nums);
        return nums;
        }
      }
    };
    
    function placer(aset, arr, pos){
      aset = [...aset].filter(item => typeof(item) != 'object');

      const newArr = [];
      for(let i=1; i < 10; i+=1){
        if(!aset.includes(i.toString())){
          // possible nums
          newArr.push(i.toString());
        }
      }
      if(newArr.length == 1){
        arr[pos[0]][pos[1]] = newArr[0];
        return arr;
      }
      
      if(newArr.length > 9){
        // IMPOSSIBLE TO DO
        console.log("impossible");
        return "IMPOSSIBLE";
      }
      
      arr[pos[0]][pos[1]] = newArr;
      return arr; 
      // return position of arrays to another array
      // call caller on this stuff again 

    };

    function lastbit(){
      let leg = true;
      diffArr.forEach((a, b) => {
        caller(better[a[0]][a[1]], better, a)
        if(better[a[0]][a[1]].length > 1){
          leg = false;
        }
      });
      if(!leg){
        lastbit();
      }
      else{
        return better;
      }
    }

    better.forEach((a, b) => a.forEach((c, d) => {
      caller(c, better, [b, d]);
      if(typeof(better[b][d]) == "object"){
        diffArr.push([b, d]);
      }
    }));

    lastbit();
    better.filter((ar, val) => {
      let setter = new Set();
      ar.filter((br, c) => {
        if(setter.has(br)){
          better = [];
          return
        }
        else{
          setter.add(br);
        }
      });
    });
      
    better = better.flat(2);
    better = better.join('');
    return better;
    
  };

}

module.exports = SudokuSolver;

