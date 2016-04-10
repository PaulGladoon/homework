function buildPower(a, b) {
  a = prompt('Введите число которое надо возвести в степень')
  b = prompt('В какую степень этот число возвести')
  var formula = Math.pow(a, b);
  console.log(formula);
}

buildPower();