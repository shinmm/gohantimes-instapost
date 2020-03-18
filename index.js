//Helper functions
function clearLists(){
  document.getElementById('ingredients_jpn_preview').innerHTML = '';
  document.getElementById('ingredients_eng_preview').innerHTML = '';
}


// Change caption part count
function postCount(){
  console.log("Post Count ADDING");
  // TODO:  Retrieve post count
  var postCount = 20;
  var line = `Homemade Food Part: ${postCount}`;
  //add line to div
  document.getElementById('post_count').innerHTML = (line);

}
// Add Food dish name
$(document).on("keyup","#food_name_input",function() {
   // Keep checking input value until it matches one in list
   var inputValue = $("#food_name_input").val();
   var line = `🍙🍙${inputValue}🍙🍙`;
   //add line to div
   document.getElementById('food_name_preview').innerHTML = (line);
   console.log(inputValue);
})

// Add Ingredients JAPANESE
$(document).on("keyup","#ingredients_jpn_input",function(e) {
   // Keep checking input value until it matches one in list
   var key = e.keyCode; //To check when user clicks enter/delete
   var inputValue = $("#ingredients_jpn_input").val();
   document.getElementById("ingredients_eng_input").innerHTML = inputValue;

   if (key == 13 || key == 8) {
     console.log("Enter clicked");
     //split on new line, for every element, make bullet point,
     var list= inputValue.split("\n");
     console.log(list)
     //Clear lists
     clearLists();

     // Loop through split, list bullet points
     var ind = 0;
     while(ind < list.length-1) {
       document.getElementById('ingredients_jpn_preview').innerHTML += `<li>${list[ind]}</li>`;
       // TODO: Also add english translation
       document.getElementById('ingredients_eng_preview').innerHTML += `<li>${list[ind]}</li>`;
       ind++;
     }
   }
   // document.getElementById('ingredients_jpn_preview').innerHTML = (inputValue);
   console.log(key);
   console.log(inputValue);
})


// Add Ingredients ENGLISH
$(document).on("keyup","#ingredients_eng_input",function(e) {
   // Keep checking input value until it matches one in list
   var key = e.keyCode; //To check when user clicks enter/delete
   var inputValue = $("#ingredients_eng_input").val();
   document.getElementById("ingredients_jpn_input").innerHTML = inputValue;

   if (key == 13 || key == 8) {
     console.log("Enter clicked");
     //split on new line, for every element, make bullet point,
     var list= inputValue.split("\n");
     console.log(list)
     //Clear lists
     clearLists();

     // Loop through split, list bullet points
     var ind = 0;
     while(ind < list.length-1) {
       document.getElementById('ingredients_eng_preview').innerHTML += `<li>${list[ind]}</li>`;
       // TODO: Also add Japanese translation
       document.getElementById('ingredients_jpn_preview').innerHTML += `<li>${list[ind]}</li>`;
       ind++;
     }
   }
   // document.getElementById('ingredients_jpn_preview').innerHTML = (inputValue);
   console.log(key);
   console.log(inputValue);
})

// Add Recipe ENGLISH
$(document).on("keyup","#recipe_eng_input",function(e) {
   // Keep checking input value until it matches one in list
   var key = e.keyCode; //To check when user clicks enter/delete
   var inputValue = $("#recipe_eng_input").val();

   if (key == 13 || key == 8) {
     console.log("Enter clicked");
     //split on new line, for every element, make bullet point,
     var list= inputValue.split("\n");
     console.log(list)
     //Clear lists
     document.getElementById('recipe_eng_preview').innerHTML = '';

     // Loop through split, list bullet points
     var ind = 0;
     while(ind < list.length-1) {
       document.getElementById('recipe_eng_preview').innerHTML += `<li>${list[ind]}</li>`;
       ind++;
     }
   }
   console.log(key);
   console.log(inputValue);
})

//Generate button click
$(document).on("click","#generate_button",function(){
  console.log("Generate Clicked");
  // Run functions to generate form
  postCount();
  dishName();
})
