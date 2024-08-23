function watchTutorialCallback(callback, errorCallback) {
    let userLeft = false
    let userWatchingCatMeme = true
  
    if (userLeft) {
      errorCallback({
        name: 'User Left', 
        message: ':('
      })
    } else if (userWatchingCatMeme) {
      errorCallback({
        name: 'User Watching Cat Meme',
        message: '😁'  
      })
    } else {
      callback('user did not left and user not watching')
    }
  }
  
watchTutorialCallback(message => {
    console.log(message)
  }, error => {
    console.log(error.name + ' ' + error.message)
  })


//   The watchTutorialCallback function uses callback functions to handle success and error cases. 
//   It calls errorCallback if the user has either left or is watching a cat meme, and calls callback with a success message if neither condition is met.
//    The function is then used with appropriate callback functions to handle and log success or error messages.