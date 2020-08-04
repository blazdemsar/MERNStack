//lexical scope : { //lexical // }

{
    var functionScope = "hoisting allowed";
    //we can assign a new value like this:
    //      functionScope = 1234;
    // it can also be declared again like this:
    //      var functionScope = "hdskbshg";
    // it can be accessed within the block or outside of the block
  
    let lexicalScope = "hoisting not allowed";
    // it cannot be declared again:
    //      let lexicalScope = "shbsjhfb";  -> this is NOT allowed
    // it can have a new value assigned to it like this:
    //      lexicalScope = 1234;
    // can be accessed within the block, but cannot be accessed outside of it
  
    const lexicalScopeConst = "hoisting not allowed";
    // it cannot be declared again:
    //      const lexicalScopeConst = "sifbsibf"; -> this is NOT allowed
    // as soon as it is declared we need to assign it a value, we cannot do it later
    //      const lexicalScopeConst;
    //      lexicalScopeConst = 1234;  -> NOT allowed
    // can be accessed within the block, but cannot be accessed outside of it
  }
  
  //console.log(functionScope); // WILL work
  //console.log(lexicalScope); // WILL NOT work
  //console.log(lexicalScopeConst); // WILL NOT work

  /*
    For "const" we can change the value using the following example
  */

  const myConstObjectType = {
      name: "Blaz"
  }

  myConstObjectType.name = "Dennis";

  console.log(myConstObjectType.name);