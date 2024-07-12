// follow

$(".follow button").click(function(){
  $(".float-follow").addClass("float-follow-open")
})
$(".float-follow .follow-box .follow-close").click(function(){
  $(".float-follow").removeClass("float-follow-open")
})