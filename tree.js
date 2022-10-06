import Node from "./node.js";

class Tree{
  constructor(array){
    this.root = new Node(array);
    this.build();
  }
  
  build(node = this.root){
    if(node.data.flat().includes(null)){
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
    }
  }
}

export default Tree;

// let tree = new Tree([['J1', 'J2',null],['J1', 'J2',null],['J1', 'J2',null]]);
// console.log(tree.root.children[0]);
// console.log(tree.root.children[1]);
// console.log(tree.root.children[2]);
// console.log(tree.root.children[0].children[0].data);
// console.log(tree.root.children[0].children[0].children[0].data);