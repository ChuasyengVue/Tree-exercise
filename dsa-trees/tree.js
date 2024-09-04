/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // if empty tree.
    if(!this.root) return 0
    // include the root value to sum.
    let sum = this.root.val;

    function sumAllValues(node){
      // go through all children for a node.
      for(let child of node.children){
        // sum all child value.
        sum += child.val;

        // if theres any children.
        if(child.children.length > 0){
          // make child the new root.
          sumAllValues(child);
        }
      }
    }
    sumAllValues(this.root);
    return sum;
  }


  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // if empty tree
    if(!this.root) return 0;  

    let count = this.root.val % 2 === 0 ? 1 : 0;

    function countAllEvens(node){
      // go through all children for a node
      for(let child of node.children){
        // if child is even
        if(child.val % 2 === 0){
          count++;
        }
        
        // if any children
        if(child.children.length > 0){
          // make child the new root
          countAllEvens(child);
        }
      }
    }
    countAllEvens(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root) return 0

    let count = this.root.val > lowerBound ? 1 : 0;

    function allNumGreater(node){
      for(let child of node.children){
        if(child.val > lowerBound){
          count++;
        }

        if(child.children.length > 0){
          allNumGreater(child);
        }
      }
    }
    allNumGreater(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
