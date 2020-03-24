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
