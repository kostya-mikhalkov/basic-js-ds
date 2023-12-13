const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this._root = null;
  }
  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);
    if(!this._root){
      this._root = newNode;
      return;
    }
    let currentNode = this._root;

    while(currentNode){
      if(newNode.data < currentNode.data){
        if(!currentNode.left){
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if(!currentNode.right){
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }

    }
  }

  has(data) {
    let currentNode = this._root;
    while(currentNode){
      if(currentNode.data === data){
        return true;
      }
      if(data < currentNode.data){
        currentNode = currentNode.left;
      }else{
        currentNode = currentNode.right;
      }
    }
      return false;
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
let bim = new BinarySearchTree()
bim.add(8);
bim.add(18);
bim.add(7);
bim.add(2);
bim.add(9);
bim.add(24);
bim.add(2);
console.log(bim);
module.exports = {
  BinarySearchTree
};