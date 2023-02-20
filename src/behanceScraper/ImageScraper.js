const cheerio = require('cheerio');

const url = 'https://www.behance.net/adityanarayan4';

const fetchBehanceImages = async () => {
    try{
        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);

        const fullName = $('.ProfileCard-userFullName-ule');
        console.log(fullName.html());
    } catch(err) {
        console.log("error fetching images: " + err.message);
    }
};

export default fetchBehanceImages;

