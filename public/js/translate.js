// Instagram Data Retrieval
// Get request for gohantimeadventures instagram page
// Retrive profile image and posts
function translateText(text,id, lang){
  $.ajax({
    url:`http://localhost:3000/api/translate/${lang}/${text}`,
    type:'get',
    success:function(response){
      res = response.charAt(0).toUpperCase() + response.slice(1); // Capitalize
      document.getElementById(`${id}`).innerHTML += `- ${res}<br>`;
    }
  });
}


// Word Data Retrieval from internal Translation
// Get request for gohantimeadventures instagram page
// Retrive profile image and posts
function translateInternally(text, id,lang){
  // Function checks to see if translation exists, and returns translation
  // If en, search keys, if jpn search values
  function findMatch(inputText, obj){
    console.log(inputText);
    if (obj.hasOwnProperty(inputText)){
      // Translation exists in interanal db
      result = true;
      return (obj[inputText]);
    } else {
      //jpn
      if (inputText === obj[inputText]){
        return Object.keys(obj)[0];
      }
      //Translation does not exist
      result = false;
      return '';
    }
  }

  $.ajax({
    url:`http://localhost:3000/api/food-dictionary`,
    type:'get',
    success:function(response){
      var obj = response.foodterm_translations;
      var no_match = true;
      for (var key in obj) {
        var match = findMatch(text,obj[key]);
        if (match === ''){
          //no match, translate with google api
          //translateText(text,id,lang)
        } else {
          console.log(`key is ${key} value is ${match}`);
          res = match.charAt(0).toUpperCase() + match.slice(1); // Capitalize
          document.getElementById(`${id}`).innerHTML += `- ${res}<br>`;
          no_match = false;
        }
      }
      if (no_match) {
        //no match, translate with google api
        translateText(text,id,lang)
      }
    }
  });
}
