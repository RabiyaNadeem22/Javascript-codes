function watchTutorialPromise() {
  let userLeft = false;
  let userWatchingCatMeme = false;
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "😁",
      });
    } else {
      resolve("user did not left and user not watching ");
    }
  });
}

watchTutorialPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

//   The `watchTutorialPromise` function returns a promise. If `userLeft` is `true`, 
// the promise is rejected with an error indicating the user left. 
// If `userWatchingCatMeme` is `true`, the promise is rejected with an error indicating the user is distracted by a cat meme. 
// If neither condition is true, the promise is resolved with a success message: `'user did not left and user not watching'`.

// The function is used with `.then()` to handle successful resolutions and `.catch()` to handle rejections, logging the appropriate message.
