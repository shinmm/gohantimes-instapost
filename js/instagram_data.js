// Instagram Data Retrieval
// Get request for gohantimeadventures instagram page
// Retrive profile image and posts
const reg = /\d+/g; //regex to get number from pt##
$.ajax({
  url:"https://www.instagram.com/gohantimeadventures/?__a=1",
  type:'get',
  success:function(response){
    $(".profile-pic").attr('src',response.graphql.user.profile_pic_url);
    posts = response.graphql.user.edge_owner_to_timeline_media.edges;
    posts_html = '';
    for(var i=0;i<posts.length;i++){
      caption = posts[i].node.edge_media_to_caption.edges.map(e => e.node.text).join('<br>');
      likes = posts[i].node.edge_liked_by.count;
      //posts_html += `<a href="https://instagramcom/p/+${9}+">: ${caption}`;
      line = caption.split("\n")[0];
      post_num = line.split(" ")[2].match(reg);
      console.log(post_num[0]);
      //Set post number
      document.getElementById('post_num').innerHTML = parseInt(post_num[0])+1;
      break;
      // posts_html += '<a href="https://instagram.com/p/'+shortcode+'">: '+caption+';
    }
    //$(".posts").html(posts_html);
  }
});
