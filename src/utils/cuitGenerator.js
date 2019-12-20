module.exports = function getCuit(dni) {
  const xy = ['20', '23', '24', '27', '30', '33', '34'];
  const factor = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  let xydni;
  const cuits = [];

  if (dni.toString().length <= 7) {
    dni = '0' + dni;
  }

  for (let i = 0; i < xy.length; i++) {
    let digito = 0;
    xydni = xy[i] + dni;
    let chars = xydni
      .toString()
      .split('')
      .map(function(t) {
        return parseInt(t);
      });

    if (xydni.length == 10) {
      let n1 = 0;

      for (let j = 0; j < xydni.length; j++) {
        n1 = n1 + chars[j] * factor[j];
      }
      digito = 11 - (n1 % 11);
      if (digito == 11) {
        digito = 0;
      }
      if (digito == 10) {
        //    console.log('Error de implementacion');
      }

      xydni = xydni + digito;
      cuits.push(xydni);
    }
  }
  return cuits;
};
