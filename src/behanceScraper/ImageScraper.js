const cheerio = require('cheerio');

const url = 'https://www.behance.net/adityanarayan4';

const fetchBehanceImages = async () => {
    try{
        const response = await fetch('url');
        const html = await response.text();
        const $ = cheerio.load(html);

        const div = $('.Project-cover-image img');
        console.log(div);
        // //get lis with class article
        // const articles = $('li.article');
        // articles.each((li,element) => {
        //     //get <figure>
        //     const figure = $(element).find('figure');
        //     //get href attribute from <a> having overlay class
        //     const imgsrc = $(figure).find('a.overlay').attr('href');
        //     console.log(imgsrc);
        // })
        // $('li.article').each((li,element) => {
        //     const link = $(element).find('a.overlay').attr('href');
        //     console.log(link);
        // })
        
    } catch(err) {
        console.log("error fetching images: " + err.message);
    }
};

export default fetchBehanceImages;

