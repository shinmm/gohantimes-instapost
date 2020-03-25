$( document ).ready(function() {
});

// Add Food Dish Name
$(document).on("keyup","#food_name_input",function() {
   var inputValue = $("#food_name_input").val();
   var line = `🍙🍙${inputValue}🍙🍙`;
   document.getElementById('food_name_preview').innerHTML = (line);
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
       document.getElementById('ingredients_jpn_preview').innerHTML += `- ${list[ind]}<br>`;
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
       document.getElementById('ingredients_eng_preview').innerHTML += `- ${list[ind]}<br>`;
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
       document.getElementById('recipe_eng_preview').innerHTML += `- ${list[ind]}<br>`;
       ind++;
     }
   }
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
       document.getElementById('initial_comments_preview').innerHTML += `${list[ind]}<br>`;
       ind++;
     }
   }
})
