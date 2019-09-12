const _Node = require('./node')

class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }
    pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}
function isEmpty(Stack){
    console.log(`${Stack.top === null?"The Stack is empty":"The Stack is not empty"}`)
}
function peek(Stack){
    console.log(`Top of the stack is ${Stack.top.data}`)
}
function display(Stack){
    var currentNode = Stack.top
    console.log(`***********This side top********`)
    while (currentNode.next !== null){
        console.log(currentNode.data)
        currentNode = currentNode.next
    }
    console.log(currentNode.data)
}
function main(){
    const starTrek = new Stack()
    const barTrek = new Stack()
    starTrek.push("Kirk")
    starTrek.push("Spock")
    starTrek.push("McCoy")
    starTrek.push("Scotty")
    display(starTrek)

    console.log('\n**************************************************')
    console.log('Testing peek to check the top')
    console.log('\n**************************************************')
    peek(starTrek)

    console.log('\n**************************************************')
    console.log('isEmpty check not empty')
    console.log('\n**************************************************')
    isEmpty(starTrek)

    console.log('\n**************************************************')
    console.log('isEmpty check empty')
    console.log('\n**************************************************')
    isEmpty(barTrek)

    console.log('\n**************************************************')
    console.log('Run deletes')
    console.log('\n**************************************************')
    console.log(starTrek.pop())
    console.log(starTrek.pop())
    console.log('****&&&&validate&&&&****')
    display(starTrek)

    console.log('\n true test of algos \n')
    console.log(`Test 1 - is_palindrome`)
    console.log(`Given dad is_palindrome() should return true - ${is_palindrome('dad')}`)
    console.log(`Given "A man, a plan, a canal: Panama" is_palindrome() should return true - ${is_palindrome('A man, a plan, a canal: Panama')}`)
    console.log(`Given 1001 is_palindrome() should return true - ${is_palindrome('1001')}`)
    console.log(`Given Tauhida is_palindrome() should return false - ${is_palindrome('Tauhida')}`)
    console.log(`\n Test 2 Matching Paranthes`)
    console.log(`Given '(dad)' matchingParantheses() should return true - ${matchingParantheses('(dad)')}`)

}

main()



function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const myStack = new Stack()
    var count = 0 
    while (count< s.length){
        myStack.push(s[count])
        count +=1
    }

    var top 
    count = 0 
    while (count < s.length){
        if (s[count] != myStack.pop()){
            return false
        }
        count +=1
    }
    return true
}

function matchingParantheses(myStr){
    const myStack = new Stack()
    var count = 0 
    while (count< myStr.length){
        myStack.push(myStr[count])
        count +=1
    }
    var open = false 
    var currentItem = false 
    var current = myStack.top
    display(myStack)
    while (current.next !== null){
        if (current.data === ")"){
            if (open===true){
                //openned when we are bracket is already open
                console.log('1')
                return false
            }
            open = true
        }
        if (current.data === "("){
            if (open===false){
                console.log('2')
                return false
            }
            open = false
        }
    }
    if(open===true){
        console.log('here')
        return false
    }
    return true
}

