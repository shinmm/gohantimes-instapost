require('dotenv').config(); // read .env files
const {Translate} = require('@google-cloud/translate').v2;// Imports the Google Cloud client library
const express = require('express');

const fs = require("fs"); // File IO
var bodyParser = require('body-parser');
var translationdataUtil = require("./translation-data-util");
var _ = require("underscore");
var moment = require('moment');
var marked = require('marked');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var handlebars = exphbs.handlebars;

const app = express();
const port = process.env.PORT || 3000;
var _TRANSLATIONS = translationdataUtil.loadData().foodterm_translations;

// Set public folder as root
app.use(express.static('public'));
app.use(express.json());

/// Middleware SetUp
app.use(logger('dev'));
// handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main', partialsDir: "views/partials/" }));
app.set('view engine', 'handlebars');
// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Set root directory to /public
app.use(express.static('public'));
app.use(express.json());

app.get("/", function(req, res) {
  res.render('home')
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

//JSON for food dictionary terms for translation
app.get("/api/food-dictionary", function(req, res) {
  // Display all translation data
  res.json(_TRANSLATIONS);
});

//Way to add to
app.get("/add-food", function(req, res) {
  //Send data to display
  res.render('addfood')
});

//Way to add to
app.post("/add-new-food", function(req, res) {
  console.log("In the post request");
  var body = req.body;     // your JSON
  // Transform tags and content
  if (body.eng_word && body.jpn_word) {
    var translationPair = {}
    translationPair[body.eng_word.toLowerCase()] = body.jpn_word;
    // Save data to Json
    _TRANSLATIONS.push(translationPair);
    translationdataUtil.saveData(_TRANSLATIONS);
    res.redirect("/add-new-food");
  } else {
    // One of the fields is blank
    console.log("Empty input")
  }

});


// Listen for HTTP requests on port 3000
app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});
