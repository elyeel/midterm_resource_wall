$(document).ready(function(){
  console.log("app.js working");
  let editing = false;
  const resourceId = $('.id_data')[0].value;

  // if(resourceId) {
  //   editing = true
  // }
  //post comment
  const $comment_button = $('.comment_button');
  const $comment_text = $('.comment_text');

  const postRating = function(rate,resource) {
    const data = {};
    data[resource] = rate;
    $.ajax({
      method: "POST",
      url: "/stars",
      data: data
    })
    .done(function() {
      console.log("Done posting ratings");
      window.location.reload();
    })
  }

  $('#star1').click(function(event) {
    postRating(1, resourceId);
  });
  $('#star2').click(function(event) {
    postRating(2, resourceId);
  });
  $('#star3').click(function(event) {
    postRating(3, resourceId);
  });
  $('#star4').click(function(event) {
    postRating(4, resourceId);
  });
  $('#star5').click(function(event) {
    postRating(5, resourceId);
  });


  $('#comment_form').submit(function(event){
    event.preventDefault();

    let url;
    if (!editing) {
      $comment_text[0].disabled = 0;
      $comment_button[0].innerText = "Post Comment";
      // /comment/add
      url = "/comment/add";
      editing = true;
    } else {
      $comment_text[0].disabled = 1;
      $comment_button[0].innerText = "Edit Comment";
      // comment/edit
      url = "/comment/edit";
      editing = false;

      console.log(url);
      const data = {};
      data[resourceId] = $comment_text[0].value;

      $.ajax({
        method: "POST",
        url: url,
        data: data,
        success: function () {
          // $('.tweet-container').empty(); // clear the client side tweets
          // loadTweets(); // reloading the tweets back with latest update under success callback
        }
      }).done(function(data, textStatus) {
        // window.location.reload();
        // alert( "Data Saved: " + JSON.stringify(data) );
        // // rerender the tweets
        // console.log('done:', textStatus);
        // $error.hide();
        // $('.new-tweet').hide();
        // $error.slideUp();
        // isNew = false;
      });
    }
  })
});
