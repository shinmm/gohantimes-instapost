console.log("Add food");

function myFunction(){
  console.log("Add food");
  console.log("Add food");
  console.log("Add food");
  console.log("Add food");
  eng = document.getElementById('eng_word').value;
  jpn = document.getElementById('jpn_word').value;
  var word = {
    [`${eng}`] : jpn
  }
   $.ajax({
       url: 'http://localhost:3000/add-new-food',
       type: 'post',
       dataType: 'json',
       contentType: 'application/json',
       success: function (data) {
         console.log("Success!ajaxs");
           console.log(data);
       },
       data: JSON.stringify(word)
   });
}
