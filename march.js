var today = new Date();


const getImage = () => {
    if(today.getDate() == 15) {
        console.log("grabbing Image for march 15th from march.js");
        return '/Users/amritsingh/Desktop/Projects/TwitterAPIProject/images/bhai_baghel_singh1.png';
    }
}

const getLink = () => {
    if(today.getDate() == 15) {
        console.log("grabbing Link for march 15th from march.js");
        return 'http://www.discoversikhism.com/sikhs/bhai_baghel_singh.html';
    }
}

exports.getImage = getImage; 
exports.getLink = getLink;