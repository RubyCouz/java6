
//déclartion de la fonction
function number(){
  //définition des variables
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  //conversion de la chaine de caractère en nombre
  var firstNumberint = parseInt(firstNumber);
  var secondNumberfloat = parseFloat(secondNumber);
  var regex = /^[0-9\, \.]+$/;
  var result = firstNumberint / secondNumberfloat;
  if ((regex.test(firstNumber) == true) && (regex.test(secondNumber) == true))
  {
    alert(result);
  }else{
    alert('recommencez votre saisie');
  }
}
