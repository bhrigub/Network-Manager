//jQuery for header and navbar
$(document).ready(function(){
 $('.header').height($(window).height())
})
$(".btn a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
 },1000);
 })

$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
 },1000);
 })
