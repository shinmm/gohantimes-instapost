$( document ).ready(function() {
  //Auto generate 30 hashtags (Instagram hashtag limit = 30)
  //Randomly Select 30 from the 3 hashtag categories
  const shuffled1 = HASHTAGS_JAPANESEFOOD.sort(() => 0.5 - Math.random());
  const shuffled2 = HASHTAGS_POPULARFOOD.sort(() => 0.5 - Math.random());
  const shuffled3 = HASHTAGS_JAPANESE.sort(() => 0.5 - Math.random());
  let selected1 = shuffled1.slice(0, 4);
  let selected2 = shuffled2.slice(0, 10);
  let selected3 = shuffled3.slice(0, 16);
  generated_hashtags = selected1.concat(selected2, selected3);
  document.getElementById("hashtags_preview").innerHTML = generated_hashtags.join(" ");

  //Copy to clipboard button click
  //We need to create a text area for the content to copy
  //Shoutout to https://github.com/pawelgrzybek/instagram-line-break.app
  //For the code to adjust line spacing for instagram cation.
  $("#copy-to-clipboard").click(function(){
    text = document.getElementById('output_preview').innerText;
    const textarea = document.createElement('textarea');
    textarea.value = text; // copy preview contents into textarea
    // Format for instagram caption
    let value = textarea.value;
    value = value.replace(/(?:\r\n|\r|\n)/g, "\u2063\n");
    textarea.value = value;

    document.body.appendChild(textarea);
    textarea.select(); //need to select for exec
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("Copied to clipboard");
  });
});

// Add Food Dish Name
$(document).on("keyup","#food_name_input",function() {
   var inputValue = $("#food_name_input").val();
   var line = `🍙🍙${inputValue}🍙🍙`;
   document.getElementById('food_name_preview').innerHTML = (line);
})

// Inital comments
$(document).on("keyup","#initial_comments",function(e) {
   // Keep checking input value until it matches one in list
   var key = e.keyCode; //To check when user clicks enter/delete
   var inputValue = $("#initial_comments").val();
   document.getElementById('initial_comments_preview').innerHTML = inputValue;

   if (key == 13 || key == 8) {
     //split on new line, for every element, make bullet point,
     var list= inputValue.split("\n");
     var ind = 0;
     //Clear div for update
     document.getElementById('initial_comments_preview').innerHTML = '';
     while(ind < list.length-1) {
       document.getElementById('initial_comments_preview').innerHTML += `<div>${list[ind]}</div>`;
       ind++;
     }
   }
})

// Add Ingredients JAPANESE
$(document).on("keyup","#ingredients_jpn_input",function(e) {
   //Key = 8(delete key) 13(enterkey)
   var key = e.keyCode; //To check when user clicks enter/delete
   var inputValue = $("#ingredients_jpn_input").val();

   if (key == 13 || key == 8) {
     //Split on new line with text from textarea
     //For every element, make bullet point, along with translation
     var list= inputValue.split("\n");
     var ind = 0;
     //Clear lists to update
     clearLists();
     // Loop through split, list bullet points
     while(ind < list.length-1) {
       document.getElementById('ingredients_jpn_preview').innerHTML += `<div>- ${list[ind]}</div>`;
       // Add translated text to list of ingredients(ENG)
       // TODO: Use translations from internal dictionary first, then google translate API
       translateInternally(list[ind], 'ingredients_eng_preview', 'en');
       ind++;
     }
   }
})

// Add Ingredients ENGLISH
$(document).on("keyup","#ingredients_eng_input",function(e) {
   var key = e.keyCode; //To check when user clicks enter/delete
   var inputValue = $("#ingredients_eng_input").val();

   if (key == 13 || key == 8) {
     //Split on new line with text from textarea
     //For every element, make bullet point, along with translation
     var list= inputValue.split("\n");
     var ind = 0;
     //Clear lists
     clearLists();
     // Loop through split, list bullet points
     while(ind < list.length-1) {
       document.getElementById('ingredients_eng_preview').innerHTML += `<div>- ${list[ind]}</div>`;
       // Add translated text to list of ingredients(ENG)
       translateInternally(list[ind], 'ingredients_jpn_preview', 'jpn');
       ind++;
     }
   }
})

// Add Recipe ENGLISH
$(document).on("keyup","#recipe_eng_input",function(e) {
   // Keep checking input value until it matches one in list
   var key = e.keyCode; //To check when user clicks enter/delete
   var inputValue = $("#recipe_eng_input").val();

   if (key == 13 || key == 8) {
     //split on new line, for every element, make bullet point,
     var list= inputValue.split("\n");
     var ind = 0;
     //Clear div for update
     document.getElementById('recipe_eng_preview').innerHTML = '';
     while(ind < list.length-1) {
       document.getElementById('recipe_eng_preview').innerHTML += `<div>${ind+1}) ${list[ind]}</div>`;
       ind++;
     }
   }
})
