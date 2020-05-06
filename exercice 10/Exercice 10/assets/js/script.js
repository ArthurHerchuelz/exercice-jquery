$(document).ready(function(){
$('#green').hover(function(){
  $('#text').addClass('green');
}, function(){
  $('#text').removeClass();
});
$('#red').hover(function(){
  $('#text').addClass('red');
}, function(){
  $('#text').removeClass();
});
$('#blue').hover(function(){
  $('#text').addClass('blue');
}, function(){
  $('#text').removeClass();
});
});
