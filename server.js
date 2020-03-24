require('dotenv').config(); // read .env files
const {Translate} = require('@google-cloud/translate').v2;// Imports the Google Cloud client library
const express = require('express');
const fs = require("fs"); // File IO

const app = express();
const port = process.env.PORT || 3000;

// Set public folder as root
app.use(express.static('public'));
app.use(express.json());

// Listen for HTTP requests on port 3000
app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});

app.get("/home", function(req, res) {
  res.sendFile('/public/index.html', { root: __dirname });
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
  // Read food_dictionary.json file
  fs.readFile("food_dictionary.json", function(err, data) {
      // Check for errors
      if (err) throw err;
      // Converting to JSON
      const food_dict = JSON.parse(data);
      console.log(food_dict); // Print users
      res.json(food_dict)
  });
});

//Way to add to
app.get("/add-food", function(req, res) {
  res.sendFile('/public/html/add_food.html', { root: __dirname });
});

//Way to add to
app.post("/add-new-food", function(req, res) {
  console.log("In the post request");
  new_word = req.body;     // your JSON
  console.log(new_word)
  // Open json file with data, add new eng:jpn translation pair
  fs.readFile('food_dictionary.json', 'utf8', function(err, data){
    if (err){
        console.log(err);
    } else {
      obj = JSON.parse(data); //Parse to object
      obj.foodterm_translations.push(new_word); //Add new term
      newJson = JSON.stringify(obj); //convert back to json to write
      fs.writeFile('food_dictionary.json', newJson, 'utf8',function(err) {
      // Callback function
        if (err) throw err;
        console.log('complete');
      });
    }
  });
  res.send("Success");//Success if reached
});
