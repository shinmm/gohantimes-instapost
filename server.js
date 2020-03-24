require('dotenv').config(); // read .env files
const {Translate} = require('@google-cloud/translate').v2;// Imports the Google Cloud client library
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
  res.send('index.html');
});

//:target_lang : Language code, like 'en' for English, 'jpn' for Japanese
//:text : Test to be translated
app.get("/api/translate/:target_lang/:text", function(req, res) {
  var text = req.params.text;
  var target_lang = req.params.target_lang;
  // Instantiates a client for Google translate API
  const translate = new Translate(
    {
     projectId: 'gohantimeadventu-1584724074072',
     keyFilename: '/Users/shinmitsuno/Desktop/gohantimes-instapost/keys/Gohantimeadventures caption-69998bf26c1d.json'
    }
  );
  async function translateText(text,target) {
    // Translates the text into the target language.
    var con = "";
    let [translations] = await translate.translate(text, target);
    translations = Array.isArray(translations) ? translations : [translations];
    translations.forEach((translation, i) => {
      res.json(translation); //Send translation as json
    });
  }
  translateText(text, target_lang);
});
