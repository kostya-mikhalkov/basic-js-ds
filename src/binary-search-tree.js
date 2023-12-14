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

  find(data) {
    let currentNode = this._root;
    while(currentNode){
      if(currentNode.data === data){
        return currentNode;
      } else if (data < currentNode.data){
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(data) {
  let currentNode = this._root;
  let parent = null;
  let isLeftChild = true;

  while (currentNode && currentNode.data !== data) {
    parent = currentNode;
    if (data < currentNode.data) {
      currentNode = currentNode.left;
      isLeftChild = true;
    } else {
      currentNode = currentNode.right;
      isLeftChild = false;
    }
  }

  if (!currentNode) {
    return;
  }

  if (!currentNode.left && !currentNode.right) {
    if (currentNode === this._root) {
      this._root = null;
    } else if (isLeftChild) {
      parent.left = null;
    } else {
      parent.right = null;
    }
  }


  else if (!currentNode.right) {
    if (currentNode === this._root) {
      this._root = currentNode.left;
    } else if (isLeftChild) {
      parent.left = currentNode.left;
    } else {
      parent.right = currentNode.left;
    }
  }

  else if (!currentNode.left) {
    if (currentNode === this._root) {
      this._root = currentNode.right;
    } else if (isLeftChild) {
      parent.left = currentNode.right;
    } else {
      parent.right = currentNode.right;
    }
  }


  else {
    let successor = this.getSuccessor(currentNode);
    if (currentNode === this._root) {
      this._root = successor;
    } else if (isLeftChild) {
      parent.left = successor;
    } else {
      parent.right = successor;
    }
    successor.left = currentNode.left;
  }
}

getSuccessor(deleteNode) {
  let successor = deleteNode;
  let successorParent = deleteNode;
  let current = deleteNode.right;

  while (current) {
    successorParent = successor;
    successor = current;
    current = current.left;
  }

  if (successor !== deleteNode.right) {
    successorParent.left = successor.right;
    successor.right = deleteNode.right;
  }

  return successor;
}
  min() {
    let currentNode = this._root;
    let parrent = null;

    while(currentNode){
      if(currentNode.left === null){
        return parrent.data;
      } else {
        currentNode = currentNode.left;
      }
      parrent = currentNode;
    }
  }

  max() {
    let currentNode = this._root;
    let parrent = null;

    while(currentNode){
      if(currentNode.right === null){
        return parrent.data;
      } else {
        currentNode = currentNode.right;
      }
      parrent = currentNode;
    }
  }
}

module.exports = {
  BinarySearchTree
};