var today = new Date();


const getImage = () => {
    if(today.getDate() == 20) {
        console.log("grabbing Image for Saka Nankana Sahib from February.js");
        return '/Users/amritsingh/Desktop/Projects/TwitterAPIProject/images/nankana_sahib_massacre.jpg';
        
    }
}

const getLink = () => {
    if(today.getDate() == 20) {
        console.log("grabbing Link for Saka Nankana Sahib from February.js");
        return 'http://www.discoversikhism.com/sikh_genocide/1921_nankana_massacre.html';
    }
}


exports.getImage = getImage;
exports.getLink = getLink;