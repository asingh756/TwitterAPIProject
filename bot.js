console.log('Starting the Twitter bot');


// importing the twit package
var Twit = require('twit'); 
var keys = require('./keys');
var T = new Twit(keys);



function tweetStatus(message) {
  var tweet = {
    status: message
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if(err){
      console.log("Diddnt work bro line 20 --> bot.js");
      console.log(err);
      console.log();
    } else {
      console.log("It Worked!!!");
    };
  }
}


// A user stream
var stream = T.stream('statuses/filter', { track: ['@TestBotSingh1'] });

// When someone follows the user
stream.on('follow', followed);
stream.on('tweet', tweetEvent);

// In this callback we can see the name and screen name 
function followed(event) {
  console.log("Hi 2");
  var name = event.source.name;
  var screenName = event.source.screen_name;
  console.log('I was followed by: ' + name + ' ' + screenName);
  tweetStatus('@' + screenName + ' Thank you for following me!');
};

function tweetEvent(tweet) {
  // Who sent the tweet?
  var name = tweet.user.screen_name;
  // What is the text?
   var txt = tweet.text;
  // the status update or tweet ID in which we will reply
  var nameID  = tweet.id_str;

   // Get rid of the @ mention
   var txt = txt.replace(/@TestBotSingh1/g, "");

  // Start a reply back to the sender
  var reply = "Hi @" + name + ' ' + 'we will get back to you shortly.';

  var params = {
        status: reply,
        in_reply_to_status_id: nameID
  };

  T.post('statuses/update', params, function(err, data, response) {
    if (err !== undefined) {
      console.log(err);
    } else {
      console.log('Tweeted: ' + params.status);
    }
  })
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// POST ON A CERTAIN DATE
const january = require('./january');
const february = require('./february');
//const march = require('./march');
/*
add following months here
*/

// reference todays date
var today = new Date();


// If it is January
if(today.getMonth() == 0 ) {
  //var b64content = fs.readFileSync('/Users/amritsingh/Desktop/Projects/TwitterAPIProject/images/guruamardass.jpeg', { encoding: 'base64' })
  var fs = require('fs');
  var b64content = fs.readFileSync(`${january.getImage()}`, { encoding: 'base64' })
  console.log("you are in bot.js --> January");
  

  T.post('media/upload', { media_data: b64content }, function (err, data, response) {
    // assign alt text to the media, for use by screen readers and other text-based presentations and interpreters
    var mediaIdStr = data.media_id_string
    var altText = "XYZ TEST TEST"
    var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
  
    T.post('media/metadata/create', meta_params, function (err, data, response) {
      if (!err) {
        // reference the media and post a tweet (media will attach to the tweet)
        var params = { status: `${january.getLink()}`, media_ids: [mediaIdStr] }

        T.post('statuses/update', params, function (err, data, response) {
          console.log("success")
        })
      }
    })
  }) 
// If it is February
}else if (today.getMonth() == 1){
  var b64content = fs.readFileSync(`${february.getImage()}`, { encoding: 'base64' })
  console.log("you are in bot.js --> February");

    
  T.post('media/upload', { media_data: b64content }, function (err, data, response) {
    // assign alt text to the media, for use by screen readers and other text-based presentations and interpreters
    var mediaIdStr = data.media_id_string
    var altText = "XYZ TEST TEST"
    var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
  
    T.post('media/metadata/create', meta_params, function (err, data, response) {
      if (!err) {
        // reference the media and post a tweet (media will attach to the tweet)
        var params = { status: `${february.getLink()}`, media_ids: [mediaIdStr] }
        
        T.post('statuses/update', params, function (err, data, response) {
          console.log("success")
        })
      }
    })
  }) 

} else {
  console.log("not today bro");
  console.log(today.getDate() + ", " + today.getMonth());
  console.log(testDate.getDate() + ", " + testDate.getMonth());
}
