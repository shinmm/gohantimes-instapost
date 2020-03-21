require('dotenv').config(); // read .env files

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Set public folder as root
app.use(express.static('public'));

// Listen for HTTP requests on port 3000
app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});

app.get("/", function(req, res) {
  console.log("Get homemade");
  res.sendFile('index.html');
});
// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;

// Instantiates a client for Google translate API
const translate = new Translate(
  {
   projectId: 'gohantimeadventu-1584724074072',
   keyFilename: '/Users/shinmitsuno/Desktop/gohantimes-instapost/keys/Gohantimeadventures caption-69998bf26c1d.json'
  }
);

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// const text = 'The text to translate, e.g. Hello, world!';
// const target = 'The target language, e.g. ru';


async function translateText(text,target) {
  // Translates the text into the target language. "text" can be a string for
  // translating a single piece of text, or an array of strings for translating
  // multiple texts.
  let [translations] = await translate.translate(text, target);
  translations = Array.isArray(translations) ? translations : [translations];
  console.log('Translations:');
  translations.forEach((translation, i) => {
    console.log(`${text} => (${target}) ${translation}`);
  });
}

translateText('生姜', 'en');
