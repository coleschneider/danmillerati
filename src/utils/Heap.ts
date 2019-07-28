interface Node {
    weight: number;
    id: number;
}

class Heap {
    scoreFunction: (a: Node) => number;

    content: Node[];

    constructor(scoreFunction: (a: Node) => number) {
        this.scoreFunction = scoreFunction;
        this.content = [];
    }

    push(element) {
        this.content.push(element);
        this.bubbleUp(this.content.length - 1);
    }

    pop() {
        const result = this.content[0];
        const end = this.content.pop();
        if (this.content.length > 0) {
            this.content[0] = end;
            this.heapifyDown(0);
        }
        return result;
    }

    remove(node) {
        for (let i = 0; i < this.content.length; i++) {
            const currentNode = this.content[i];
            // eslint-disable-next-line
            if (currentNode !== node) continue;
            const end = this.content.pop();
            if (i === this.content.length - 1) break;
            this.content[i] = end;
            this.bubbleUp(i);
            this.heapifyDown(i);
            break;
        }
    }

    size() {
        return this.content.length;
    }

    bubbleUp(n) {
        const element = this.content[n];
        const score = this.scoreFunction(element);

        while (n > 0) {
            const parentIdx = Math.floor((n + 1) / 2) - 1;
            const parent = this.content[parentIdx];
            if (score >= this.scoreFunction(parent)) break;
            // Swap
            this.content[parentIdx] = element;
            this.content[n] = parent;
            // eslint-disable-next-line
            n = parentIdx;
        }
    }

    heapifyDown(n) {
        // eslint-disable-next-line
        const length = this.content.length;

        const element = this.content[n];

        const elemScore = this.scoreFunction(element);

        while (true) {
            // Compute the indices of the child elements.
            const leftChild = (n + 1) * 2;

            const rightChild = leftChild - 1;
            // This is used to store the new position of the element,
            // if any.
            let swap = null;
            // If the first child exists (is inside the array)...
            if (rightChild < length) {
                // Look it up and compute its score.
                const child1 = this.content[rightChild];
                // eslint-disable-next-line
                var child1Score = this.scoreFunction(child1);
                // If the score is less than our element's, we need to swap.
                if (child1Score < elemScore) swap = rightChild;
            }
            // Do the same checks for the other child.
            if (leftChild < length) {
                const child2 = this.content[leftChild];

                const child2Score = this.scoreFunction(child2);
                // eslint-disable-next-line
                if (child2Score < (swap == null ? elemScore : child1Score))
                    swap = leftChild;
            }

            // No need to swap further, we are done.
            if (swap == null) break;

            // Otherwise, swap and continue.
            this.content[n] = this.content[swap];
            this.content[swap] = element;
            // eslint-disable-next-line
            n = swap;
        }
    }
}

export default Heap;
