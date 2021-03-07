var today = new Date();


const getImage = () => {
    if(today.getDate() == 14) {
        console.log("Grabbing image for march 14th from march.js");
        return '/Users/amritsingh/Desktop/Projects/TwitterAPIProject/images/guruHarRai.jpeg';
    }
    if(today.getDate() == 6) {
        console.log("grabbing Image for march 15th from march.js");
        return '/Users/amritsingh/Desktop/Projects/TwitterAPIProject/images/bhai_baghel_singh1.png';
    }
    if(today.getDate() == 19) {
        console.log("Grabbing image for march 19th from march.js");
        return '/Users/amritsingh/Desktop/Projects/TwitterAPIProject/images/guruHarGobind.jpeg';
    }
    if(today.getDate() == 25) {
        console.log("Grabbing image for march 25th from march.js");
        return '/Users/amritsingh/Desktop/Projects/TwitterAPIProject/images/guruHarGobind.jpeg';
    }

    if(today.getDate() == 29) {
        console.log("Grabbing Image for March 29th from march.js");
        return '/Users/amritsingh/Desktop/Projects/TwitterAPIProject/images/hollamahalla.jpg';
    }
}

const getLink = () => {
    if(today.getDate() == 14) {
        console.log("Grabbing link for march 14 from march.js");
        return 'http://dailysikhupdates.com/gurgaddi-diwas-of-guru-har-rai-sahib-ji/';
    }
    if(today.getDate() == 6) {
        console.log("grabbing Link for march 15th from march.js");
        return 'http://www.discoversikhism.com/sikhs/bhai_baghel_singh.html';
    }
    if(today.getDate() == 19){
        console.log("Grabbing link for march 19th from march.js");
        return 'http://www.discoversikhism.com/sikh_gurus/sri_guru_hargobind_sahib_ji.html';
    }
    if(today.getDate() == 25) {
        console.log('Grabbing link for march 29th from march.js');
        return 'http://www.sikh-heritage.co.uk/Martyrs/subegshahbaz/subegshabz.htm';
    }
    if(today.getDate() == 29){
        console.log("Grabbing link for march 29th from march.js");
        return 'https://www.allaboutsikhs.com/sikh-way-of-life/sikh-festivals/the-sikh-festivals-holla-mohalla/';
    }
}

exports.getImage = getImage; 
exports.getLink = getLink;