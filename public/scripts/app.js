// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });

$(document).ready(function(){
  console.log("app.js working");
  const resourceId = $('.id_data')[0].value;
  //post comment
  const $comment_button = $('.comment_button');

  $(".comment_form").submit(function(event){
    event.preventDefault();

    $.ajax({
      method: "POST",
      url: "/comment",
      data:
    })
  })
});
