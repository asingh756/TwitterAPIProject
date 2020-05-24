/*
//
// post a tweet with media
//
var fs = require('fs');

var b64content = fs.readFileSync('/home/amrit/Desktop/BotProject/SFFOR113-1_medium.jpg', { encoding: 'base64' })

// first we must post the media to Twitter
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and
  // other text-based presentations and interpreters
  var mediaIdStr = data.media_id_string
  var altText = "Small flowers in a planter on a sunny balcony, blossoming."
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet)
      var params = { status: 'Media Upload Test #nofilter', media_ids: [mediaIdStr] }

      T.post('statuses/update', params, function (err, data, response) {
        console.log(data)
      })
    }
  })
})


*/



//----------------------------------------------------------------------------------------------

 //GET POSTS EXAMPLE
/*
  //T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
    //console.log(data) 
  
    var params = {
      q: 'tabla',
     // lang: 'pa',
      count: 100
    }
    T.get('search/tweets', params, gotData);
    
    function gotData(err, data, response) {
      var tweets = data.statuses;
      for (var i =0; i < tweets.length; i++){
        console.log(tweets[i].text);
      }
     
    } 



*/






/*
//
// post a tweet with media
//
var fs = require('fs');

var b64content = fs.readFileSync('/home/amrit/Desktop/BotProject/SFFOR113-1_medium.jpg', { encoding: 'base64' })

// first we must post the media to Twitter
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and
  // other text-based presentations and interpreters
  var mediaIdStr = data.media_id_string
  var altText = "Small flowers in a planter on a sunny balcony, blossoming."
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet)
      var params = { status: 'Media Upload Test #nofilter', media_ids: [mediaIdStr] }

      T.post('statuses/update', params, function (err, data, response) {
        console.log(data)
      })
    }
  })
})


*/



//----------------------------------------------------------------------------------------------

 //GET POSTS EXAMPLE
/*
  //T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
    //console.log(data) 
  
    var params = {
      q: 'tabla',
     // lang: 'pa',
      count: 100
    }
    T.get('search/tweets', params, gotData);
    
    function gotData(err, data, response) {
      var tweets = data.statuses;
      for (var i =0; i < tweets.length; i++){
        console.log(tweets[i].text);
      }
     
    } 



*/










/*Post based on an event

setInterval(tweetIt, 1000*20)
tweetIt();

var r = 0
function tweetIt(){
  
  var tweet = {
    status: 'Bot setInterval Test ' + r++
  }

  T.post('statuses/update', tweet, tweeted);
  
  function tweeted(err, data, response) {
  
    if (err) {
      console.log(data);
    } else {
      console.log("it worked");
    }
  }

}

/*function increment(r) {

  return ++r;
}*/














/*
RETWEET EXAMPLE 


  T.post('statuses/retweet/:id', { id: '343360866131001345' }, function (err, data, response) {
    console.log(data)
  })



var tweet = {
  id: '1252458712830062592'
}

T.post('statuses/retweet/:id', tweet, retweeted);

function retweeted (err, data, response) {
  if(err){
    console.log("something went wrong");
  } else {
    console.log("retweeted successfuly");
  }
}



*/











/*
TWEET EXAMPLE

T.post('statuses/update', { status: 'helllllllo world!' }, function(err, data, response) {
  console.log(data)
})
*/
/*
var tweet = {
  status: 'Switched the project over to my mac...yikes'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {

  if (err) {
      console.log("diddnt work bro");
  } else {
    console.log("it worked!");
  }

}
*/