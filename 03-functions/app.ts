// FUNCTIONS

// 1. Type functions with parameters and return types
function sum(a: number, b: number) {
    return a + b;
  }
  
  function sum2(a: number, b: number): number {
    return a + b;
  }
  
  sum(1, 2);
  // sum(true, 'Hi'); -> error
  
  // 2. What if function returns nothing
  function logToConsole(message: string): void {
    console.log(message);
  }
  
  // 3. Optional parameters
  function logToConsole2(message: string, source?: string) {
    console.log(message);
    if (source) {
      console.log(source); // undefined
    }
  }
  
  logToConsole2("Hello"); // "Hello"
  
  // 4. Default parameter
  function logToConsole3(message: string, source: string = 'Joe') {
    console.log(message);
   console.log(source); // real source or Joe
  }
  
  logToConsole2("Hello"); // "Hello", "Joe"
  
  // 5. Arrow function
  
  const sum5 = (a: number, b: number) => a + b;
  const sum6 = (a: number, b: number): number => a + b;
  