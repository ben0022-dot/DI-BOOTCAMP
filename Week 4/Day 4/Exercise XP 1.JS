//Creat a functioncalled "compareToTen(num)" that takes a number as an argument.
//The function should return a promise:
function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}
//create a promise that resolves itselfin 4 seconds and returns a "success" string.
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});
//use promise.resolve(value) to create a promise that will resolve itself with a value of 3.
const resolvedPromise = Promise.resolve(3);
//use promise.reject(error) to create a promise that will reject itself with the string "error".
const rejectedPromise = Promise.reject("error");
