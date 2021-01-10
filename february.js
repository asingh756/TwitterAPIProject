var today = new Date();


const getImage = () => {
    if(today.getDate() == 5) {
        console.log("grabbing Image for January 5th from January.js");
        return '/Users/amritsingh/Desktop/Projects/TwitterAPIProject/images/guruamardass.jpeg';
        
    }
}

const getLink = () => {
    if(today.getDate() == 5) {
        console.log("grabbing Link for January 5th from January.js");
        return 'https://www.allaboutsikhs.com/sikh-history/sikh-history-timeline/today-in-sikh-history-27th-november/';
    }
}


exports.getImage = getImage;
exports.getLink = getLink;