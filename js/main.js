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
$(document).ready(function() {if ($("#inputCheck").hasClass("ng-dirty ng-invalid")) { //You can also use $(this).hasClass
      $("#removeHide").show();
}});
$(document).ready(function() {if ($("#textareaCheck").hasClass("ng-dirty ng-invalid")) { //You can also use $(this).hasClass
     $("#removeHide").show();
}});
