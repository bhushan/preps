class MinHeap {
    constructor() {
        this.items = [];
    }

    getLeftChildIndex(parentIndex) { return (2 * parentIndex) + 1; }
    getRightChildIndex(parentIndex) { return (2 * parentIndex) + 2; }
    getParentIndex(childIndex) { return Math.floor((childIndex - 1) / 2); }

    hasLeftChild(index) { return this.getLeftChildIndex(index) < this.items.length; }
    hasRightChild(index) { return this.getRightChildIndex(index) < this.items.length; }
    hasParent(index) { return this.getParentIndex(index) >= 0; }

    leftChild(index) { return this.items[this.getLeftChildIndex(index)]; }
    rightChild(index) { return this.items[this.getRightChildIndex(index)]; }
    parent(index) { return this.items[this.getParentIndex(index)]; }

    add(element) {
        this.items.push(element);
        this.heapifyUp();
    }

    peek() {
        if (this.items.length === 0) {
            return null;
        }

        return this.items[0];
    }

    poll() {
        if (this.items.length === 0) {
            return;
        }

        const item = this.items[0];

        // copy last elements value to first index and then remove the last element from an array
        this.items[0] = this.items[this.items.length - 1];
        this.items.pop();

        this.heapifyDown();

        return item;
    }

    heapifyUp() {
        let index = this.items.length - 1;

        while (this.hasParent(index) && this.parent(index) > this.items[index]) {
            const parentIndex = this.getParentIndex(index);
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    heapifyDown() {
        let index = 0;

        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);

            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.items[index] < this.items[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }

            index = smallerChildIndex;
        }
    }

    swap(firstIndex, secondIndex) {
        if (
            typeof this.items[firstIndex] === "undefined" ||
            typeof this.items[secondIndex] === "undefined"
        ) {
            throw Error('Invalid Indexes', 'For swapping elements please provide valid indices')
        }

        const temp = this.items[firstIndex];
        this.items[firstIndex] = this.items[secondIndex];
        this.items[secondIndex] = temp;
    }

    print() {
        console.log('-'.repeat(10));

        let level = 0;
        let index = 0;
        let space = Math.pow(2, Math.floor(Math.log2(this.items.length + 1))) - 1; // Calculate initial spaces

        while (index < this.items.length) {
            let nodesAtLevel = Math.pow(2, level); // Number of nodes at the current level
            let output = '';

            // Print spaces before the node at the current level
            let currentSpace = space / Math.pow(2, level); // Space decreases as level increases

            // Print nodes for this level with proper spacing
            for (let i = 0; i < nodesAtLevel && index < this.items.length; i++) {
                if (i > 0) {
                    // Add spaces between nodes
                    output += ' '.repeat(currentSpace * 2);
                }
                output += this.items[index];
                index++;
            }

            // Print the current level's nodes with leading spaces
            console.log(' '.repeat(currentSpace) + output);
            level++;
        }
    }
}

const minHeap = new MinHeap();
minHeap.add(13);
minHeap.add(20);
minHeap.add(15);
minHeap.add(10);
minHeap.add(9);
minHeap.add(7);
minHeap.add(9);
minHeap.add(4);
minHeap.add(8);
minHeap.add(3);

minHeap.print();
minHeap.poll();
minHeap.print();
minHeap.poll();
minHeap.print();
minHeap.poll();
minHeap.print();
