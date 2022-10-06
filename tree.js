import Node from "./node.js";

class Tree{
  constructor(array){
    this.root = new Node(array);
    this.build();
    this.setValues();
  }
  
  build(node = this.root){
    if(node.data.flat().includes(null) && node.winner() != 'J1' && node.winner() != 'J2'){
      for(let x = 0; x < 3 ; x++){
        for(let y = 0; y < 3; y++){
          if(node.data[x][y] == null){
            var newGrid = [];
            // Can't simply make a copy of the array, I need to make a copy of each array inside the array
            node.data.map(ary => newGrid.push([...ary]));
            if(node.moreJ1()){
              newGrid[x][y] = 'J2';
            }else{
              newGrid[x][y] = 'J1';
            }
            var newNode = new Node(newGrid);
            
            node.children.push(newNode);
          }
        }
      }
      node.children.map(child => this.build(child));
    }else{
      if(node.winner() == "J1"){
        node.value = -1;
      }else if(node.winner() == "J2"){
        node.value = 1;
      }else{
        node.value = 0;
      }
    }
  }

  setValues(node = this.root){
    if(node.value == null){
      node.children.map(child => this.setValues(child));
      node.value = node.children.reduce(function(acc, current){
        return acc + current.value/node.children.length;
      }, 0)
    }
  }
}

export default Tree;

let tree = new Tree([['J1', 'J2',null],['J2', 'J1',null],['J1', 'J2',null]]);
// let tree = new Tree([[null, null, null],[null, 'J1', null],[null, null, null]]);
console.log(tree.root);
console.log(tree.root.children[0]);
console.log(tree.root.children[1]);
console.log(tree.root.children[2]);
// console.log(tree.root.children[0].children);
// console.log(tree.root.children[0].children[0].children[0].data);
// console.log(tree.root.children[0].children[0].children[0].value);