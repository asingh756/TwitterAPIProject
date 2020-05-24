console.log('Starting the Twitter bot');


// importing the twit package
var Twit = require('twit'); 
var keys = require('./keys');
var T = new Twit(keys);


// POST ON A CERTAIN DATE

var fs = require('fs');
var b64content = fs.readFileSync('/Users/amritsingh/Desktop/Projects/TwitterAPIProject/images/ranijindkaur.jpeg', { encoding: 'base64' })

var today = new Date();
var testDate = new Date();
if(today.getDate() == testDate.getDate() && today.getMonth() == testDate.getMonth() ) {
  console.log("you have succesfully posted based off of todays date");
  
  T.post('media/upload', { media_data: b64content }, function (err, data, response) {
    // now we can assign alt text to the media, for use by screen readers and
    // other text-based presentations and interpreters
    var mediaIdStr = data.media_id_string
    var altText = "Rani Jind Kaur"
    var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
  
    T.post('media/metadata/create', meta_params, function (err, data, response) {
      if (!err) {
        // now we can reference the media and post a tweet (media will attach to the tweet)
        var params = { status: 'https://www.allaboutsikhs.com/sikh-history-timeline/today-in-sikh-history-23rd-may', media_ids: [mediaIdStr] }
  
        T.post('statuses/update', params, function (err, data, response) {
          console.log("fail")
        })
      }
    })
  })

} else{
  console.log("not today bro");
  console.log(today.getDate() + ", " + today.getMonth());
  console.log(testDate.getDate() + ", " + testDate.getMonth());
}








