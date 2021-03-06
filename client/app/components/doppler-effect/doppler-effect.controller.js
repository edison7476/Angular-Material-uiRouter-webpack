export default class dopplerEffectController {
    constructor($scope, foodService) {
        'ngInject';
        
        this.$scope = $scope;
        this.velocity = 0;
        this.multiplier = 1;

        this.foodService = foodService;

        this.$scope.$watch('vm.velocity', (newVal, oldVal) => {
            if (newVal > 100) {
              this.velocity = 100;
            } else if (newVal < -100) {
              this.velocity = -100;
            }
            this.multiplier = (newVal > 0) ? -0.4 : -1.6;
        });
    }

    $onInit() {
        console.log('Hello Doppler Effect', this);


        function Tree(root) {
            this.root = null;
        }

        Tree.prototype.addValue = function(val) {
            // create a Node object
            const node = new Node(val);
            if (!this.root) {
                this.root = node;
            } else {
                this.root.addNode(node);
            }
        }

        Tree.prototype.findValue = function(val) {
            if (!this.root) {
                console.log('The Tree is empty')
                return -1;
            }
        
            this.root.findNode(val);
        }
        
        Tree.prototype.inOrderTraverse = function(node = this.root) {
            if (node) {
                this.inOrderTraverse(node.left);
                console.log('inOrderTraverse: node value = ', node.val);
                this.inOrderTraverse(node.right);
            }
        }

        function Node(val) {
            this.val = val;
            this.left = null;
            this.right = null;
        }

        Node.prototype.addNode = function(newNode) {
            // newNode is a Node object
            // `this` is pointing to the Node constructor
            
            // Ignore the same node values
            if (newNode.val < this.val) {
                console.log(`Node value: ${newNode.val} < current node value: ${this.val}`);
                console.log(`Create a "LEFT NODE" of ${newNode.val} on the current node of ${this.val}`);
                console.log('------------------------------');
                this.left ?
                this.left.addNode(newNode) :
                this.left = newNode;  // Let left node to be a Node object
                                      // so we preserve the addNode function on the left node
            } else if (newNode.val > this.val) {
                console.log(`Node value: ${newNode.val} > current node value: ${this.val}`);
                console.log(`Create a "RIGHT NODE" of ${newNode.val} on the current node of ${this.val}`);
                console.log('------------------------------');
                this.right ?
                this.right.addNode(newNode) :
                this.right = newNode; // Let right node to be a Node object
                                      // so we preserve the addNode function on the right node
            }
        }

        Node.prototype.findNode = function(target) {
            console.log(`Looking for ${target} in the Tree`);
            if (this.val === target) {
                console.log(`Target Value:${target} Found`);
                console.log('------------------------------');
                return this.val;
            }

            if (target < this.val && this.left) {
                this.left.findNode(target);
            } else if (target > this.val && this.right) {
                this.right.findNode(target);
            } else {
                console.log(`Unable to find the value: ${target} in the Tree`);
                console.log('------------------------------');
                return -1;
            }
        }

        Tree.prototype.preOrderTraverse = function(node = this.root) {
            if (node) {
                console.log('preOrderTraverse: node value = ', node.val);
                this.preOrderTraverse(node.left)
                this.preOrderTraverse(node.right)
            }
        }

        Tree.prototype.postOrderTraverse = function(node = this.root) {
            if (node) {
                this.postOrderTraverse(node.left)
                this.postOrderTraverse(node.right)
                console.log('postOrderTraverse: node value = ', node.val);
            }
        }

        function createRandomNodes() {
            for (let i = 0; i < 10; i++) {
                // Create random number 1 ~ 100
                const nodeValue = Math.floor(Math.random() * 100) + 1;
                tree.addValue(nodeValue);
            }
        }

        let tree = new Tree();
        createRandomNodes();
        tree.inOrderTraverse();
 
        console.dir(tree);
        tree.findValue(13);
        tree.findValue(27);
        tree.findValue(23);
        tree.preOrderTraverse();
        tree.postOrderTraverse();

    }
}

