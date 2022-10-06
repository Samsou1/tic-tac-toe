class Node{
  constructor(array, children = []){
    this.data = array;
    this.children = children;
  }

  hasChildren(){
    return !!this.children;
  }

  numberofJ1(){
    let ary = this.data.flat();
    return ary.reduce(function(acc, current){
      if(current == 'J1'){
        return acc + 1;
      }else{
        return acc;
      }
    },0)
  }

  numberofJ2(){
    let ary = this.data.flat();
    return ary.reduce(function(acc, current){
      if(current == 'J2'){
        return acc + 1;
      }else{
        return acc;
      }
    },0)
  }

  moreJ1(){
    return this.numberofJ1() > this.numberofJ2();
  }

}

export default Node;