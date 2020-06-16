/*
Question: How will you implement stack and queue with JavaScript?

Answer: stack is already implemented in JavaScritp array. you can simply call push and pop method.
*/


var myStack = [];

//push
myStack.push(1);
myStack.push(2);
myStack.push(3);

//pop
myStack.pop(); //3
myStack.pop(); //2
myStack.pop(); //1
     
     
/*
Queue is pretty much same. other than calling pop you will use shift method to get the element in the front side of your array.
*/
        
var myQueue = [];

//push
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);

//pop
myQueue.shift(); //1
myQueue.shift(); //2
myQueue.shift(); //3

