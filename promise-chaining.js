function step1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Step 1');
        resolve('Data from step 1');
      }, 1000);
    });
  }
  
  function step2(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Step 2 with ' + data);
        resolve('Data from step 2');
      }, 1000);
    });
  }
  
  function step3(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Step 3 with ' + data);
        resolve('Data from step 3');
      }, 1000);
    });
  }
  
  step1()
    .then(result1 => step2(result1)) // Pass result from step1 to step2
    .then(result2 => step3(result2)) // Pass result from step2 to step3
    .then(result3 => {
      console.log('Final result:', result3);
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
  