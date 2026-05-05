/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;

    //find length
    let length = 1;
    let tail = head;

    while (tail.next) {
        tail = tail.next;
        length++;

    }

    //make it circular
    tail.next = head;

    //reduce k
     k = k % length;

     //find new tail
     let stepsToNewTail = length - k;
     let newTail = head;

     for (let i = 1; i < stepsToNewTail; i++) {
        newTail = newTail.next;

    }

    //new head
    let newHead = newTail.next;

    //break circle
    newTail.next = null;

    return newHead;
    
};