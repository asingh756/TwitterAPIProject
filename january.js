var today = new Date();


const getImage = () => {
    if(today.getDate() == 9) {
        console.log("grabbing Image for January 5th from January.js");
        return '/Users/amritsingh/Desktop/Projects/TwitterAPIProject/images/guruamardass.jpeg';
        
    }
    if(today.getDate() == 14){
        console.log("Grabbing Magh sangrand image shaheedi jorr mela -- January 14 2021 ");
        return '/Users/amritsingh/Desktop/Projects/TwitterAPIProject/images/chali-mukte.jpg';

    }

    if(today.getDate() == 20) {
        console.log("Grabbing Guru Gobind Singh Prakash Purab Image");
        return '/Users/amritsingh/Desktop/Projects/TwitterAPIProject/images/Guru_Gobind_singh.jpg'
    }
}

const getLink = () => {
    if(today.getDate() == 9) {
        console.log("grabbing Link for January 5th from January.js");
        return 'https://www.allaboutsikhs.com/sikh-history/sikh-history-timeline/today-in-sikh-history-27th-november/';
    }
    if(today.getDate() == 14) {
        console.log("Grabbing Magh sangrand info shaheedi jorr mela -- January 14 2021 ");
        return 'https://www.allaboutsikhs.com/sikh-youth/guru-sakhis/mai-bhag-kaur-and-the-40-mukte-s/';
    }
    if(today.getDate == 20) {
        console.log('Grabbing Guru Gobind Singh Prakash Purab link');
        return 'https://www.sikhdharma.org/guru-gobind-singhs-birth/';
    }
}


exports.getImage = getImage;
exports.getLink = getLink;