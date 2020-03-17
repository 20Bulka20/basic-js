// Chain maker
// Let's practice in chaining!
// Your task is to create the object chainMaker that creates chains. 
//The finished chain is a string and looks like this: '( value1 )~~( value2 )~~( value3 )'. 
//The chainMaker has several methods for creating chains and modifying them:
// getLength returns the current chain length as a number;
// addLink(value) adds a link containing a string representation of the value to the chain;
// removeLink(position) removes a chain link in the specified position;
// reverseChain reverses the chain;
// finishChain ends the chain and returns it.
// addLink, reverseChain and removeLink methods are chainable, while the another ones are not. 
//If addLink is called with no arguments, it adds an empty link ('( )') to the chain.
// If removeLink accepts invalid position (e.g. not a number, or a fractional number, or corresponding to a nonexistent link), 
//it must throw an Error. After calling the finishChain method, the existing chain must be deleted, as if an Error was thrown.

// For example:

// chainMaker.addLink(1).addLink(2).addLink(3).finishChain() => '( 1 )~~( 2 )~~( 3 )'

// chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain() => '( 2 )~~( 3 )'

// chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain() => '( 2 )~~( 1 )~~( 3 )'

const chainMaker = {
  Chain: [],
  // getLength returns the current chain length as a number;
  getLength() {
    this.Chain.length;
    return this;
  },
  //addLink(value) adds a link containing a string representation of the value to the chain; chainable
  addLink(value) {
    if (typeof value === 'undefined') { value = '( )'; }
    else { value = '( ' + value + ' )'; }
    this.Chain.push(value);
    return this;
  },
  // removeLink(position) removes a chain link in the specified position; chainable
  removeLink(position) {
    if (typeof position === 'number' && (position < this.Chain.length) && (position > 0)) {
       
      this.Chain.splice(position-1, 1);
      return this;
    }
    else {
      this.Chain=[];
      throw new UserError("the position argument is invalid");      
    };
  },
  // reverseChain reverses the chain; chainable
  reverseChain() {    
    this.Chain.reverse();   
    return this;
  },
  //The finished chain is a string and looks like this: '( value1 )~~( value2 )~~( value3 )'.
  // finishChain ends the chain and returns it.
  finishChain() {
   let a = this.Chain.join('~~');
   this.Chain=[];   
   return a;
  
  }
};
module.exports = chainMaker;
