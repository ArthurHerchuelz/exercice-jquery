$(document).ready(function() {
 $('#button').click(function(){
   var firstScore = parseInt($('#firstScore').val());
   var secondScore = parseInt($('#secondScore').val());
   var thirdScore = parseInt($('#thirdScore').val());
   var fourthScore = parseInt($('#fourthScore').val());
   var lastScore = parseInt($('#lastScore').val());
   var result = (firstScore + secondScore + thirdScore + fourthScore + lastScore)/5;
   if ((result>=0) && (result<10)){
     alert(result + ' /20 : C\'est quand même pas terrible!');
   }
   else if ((result>=10) && (result<13)) {
     alert(result + ' /20 : Au moins c\'est au-dessus de la moyenne.');
   }
   else if ((result>=13) && (result<16)) {
     alert(result + ' /20 : Tu pourrais faire mieux quand même!');
   }
   else if ((result>=16) && (result<20)) {
     alert(result + ' /20 : Ouai c\'est pas mal!');
   }
   else if (result==20) {
     alert(result + ' /20 : A mon avis, tu mens!')
   }
 });
});
