/* const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I love you');  
  }, 3000);
});

myPromise.then((message) => {
  document.getElementById('demo').innerHTML = message;
}) */

// below this is the standard and complete demonstration of promise

/* const deliveryPackage = new Promise((resolve, reject) => {
  console.log('Order Placed');

  setTimeout(() => {
    let isDelivered= Math.random() > 0.5;
  
    if (isDelivered) {
      resolve('Delivered package successfully!')
    } else {
      reject('Delivery package successfully!')
    };
  }, 3000)
})

  deliveryPackage
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log('Waiting for the package...'); */

// F E T C H I N G   A   F I L E   U S I N G   A   C A L L B A C K

/* function myDisplayer(something) {
  document.getElementById('demo').innerHTML = something;
}

function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.onload = function() {
    if (req.status == 200) {
      myCallback(this.responseText);
    } else {
      myCallback(`Error: $(req.status)`);
    }
  }
  req.open('GET', 'index.html');
  req.send();
}

getFile(myDisplayer); */



// F E T C H I N G   A   F I L E   U S I N G   A   P R O M I S E

function myDisplayer(something) {
  document.getElementById('demo').innerHTML = something;
}

let myPromise = new Promise((resolve, reject) => {
  let req =  new XMLHttpRequest();

  req.open('GET', 'index.html');
  req.onload = ()=> {
    if (req.status == 200) {
      resolve(req.response);
    } else {
      reject('File not Found');
    }
  };
  req.send();
});

myPromise
  .then((message) => {
    myDisplayer(message);
  })
  .catch((error) => {
    myDisplayer(error);
  });
