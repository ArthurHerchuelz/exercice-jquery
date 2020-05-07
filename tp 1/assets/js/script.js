$(document).ready(function() {
  function getNumber() {
    var minNumber = 1; // le minimum
    var maxNumber = 100; // le maximum
    var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // génération du nombre
alert(randomnumber);
});
