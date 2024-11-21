// THIS IS ONLY A PRACTICE REPO. Use /* */ when practicing different techniques. 

/*
function myDisplayer(something) {
  document.getElementById('demo').innerHTML = something;
}

async function myFunction() {
  return 'Hello Engr. Jian Jayne Osea Muñoz'
}

myFunction()
  .then((message) => {
    myDisplayer(message); // it can also be a console.log()
  })
  .catch((error) => {
    MyDisplayer(error); // it can also be a console.log()
  });
*/



// S I M P L E R

/*
function myDisplayer(something) {
  document.getElementById('demo').innerHTML = something;
}

async function myFunction() {
  return 'Hello, Engr. Jian Jayne Osea Muñoz!'
}

myFunction()
  .then((message) => {
    myDisplayer(message);
  }); 
*/



// B A S I C   S Y N T A X  with 2 arguments, reject also declared but not defined,
/*
async function myDisplay() {
  let myPromise = new Promise((resolve, reject) => {
    resolve('Hello, Engr. Jian Jayne Osea Muñoz!');
  })
  document.getElementById('demo').innerHTML = await myPromise;
}

myDisplay(); 
*/


// E X A M P L E   without   R E J E C T
/*
async function myDisplay() {
  let myPromise = new Promise((resolve) => {
    resolve('Hello, Engr. Jian Jayne Osea Muñoz!');
  })
  document.getElementById('demo').innerHTML = await myPromise;
}

myDisplay();
*/


// W A I T I N G   F O R   A   T I M E O U T
/*
async function myDisplay() {
  let myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Waiting for a Timeout');
    }, 3000);
  })
  document.getElementBy('demo').innerHTML = await myPromise;
}

myDisplay();
*/

// N O T   A D V I S A B L E
/*
async function getFile() {
  let myPromise = new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open('GET', 'index.html');
    req.onload = () => {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject('File not Found');
      }
    };
    req.send();
  });
  document.getElementById('demo').innerHTML = await myPromise;
}

getFile();
*/


// W A I T I N G   F O R   A   F I L E
// C O M P L E T E   A N D   I M P R O V E D
async function getFile() {
  let myPromise = new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open('GET', 'index.html');
    req.onload = () => {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject('File not found');
      }
    };
    req.onerror = () => {
      reject('Network error');
    };
    req.send();
  });

  try {
    document.getElementById('demo').innerHTML = await myPromise;
  } catch (error) {
    document.getElementById('demo').innerHTML = error;
  }
}

getFile();