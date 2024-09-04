/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(!this.root) return 0;

    function findMinDepth(node){
      // if its leaf node 
      if(node.left === null && node.right === null) return 1;

      // if only right child
      if(node.left === null) return findMinDepth(node.right) + 1;

      // if only left child
      if(node.right === null) return findMinDepth(node.left) + 1;
      
      return(
        // if both path have child
        Math.min(findMinDepth(node.left), findMinDepth(node.right)) + 1
      );
    }
    return findMinDepth(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root) return 0;

    function findMaxDepth(node){
      // if leaf node return 1
      if(node.left === null && node.right === null) return 1;

      // if no left node go to right 
      if(node.left === null) return findMaxDepth(node.right) + 1;

      // if no right node go to left
      if(node.right === null) return findMaxDepth(node.left) + 1;

      return(
        // if both left and right children
        Math.max(findMaxDepth(node.left), findMaxDepth(node.right)) + 1
      );
    }
    return findMaxDepth(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

    let sum = 0;

    function findMaxSum(node){
      if(node===null) return 0;
      const leftSum = findMaxSum(node.left);
      const rightSum = findMaxSum(node.right);
      
      sum = Math.max(sum , node.val + leftSum + rightSum);

      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }
    findMaxSum(this.root);
    return sum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root) return null;

    let que = [this.root];
    let small = null;

    while(que.length){
      let currNode = que.shift();
      let currVal = currNode.val;
      let high = currVal > lowerBound;
      let reassign = currVal < small || small === null;

      if(high && reassign) {
        small = currVal;
      }

      if(currNode.left) que.push(currNode.left);
      if(currNode.right) que.push(currNode.right);
    }
    return small;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
