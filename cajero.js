var boton = document.getElementById("botoncito");
boton.addEventListener("click", jesbran);
var div;

var imagenes = [];
imagenes["100"] = "dolar100.png";
imagenes["50"] = "dolar50.png";
imagenes["20"] = "dolar20.png";
imagenes["10"] = "dolar10.png";


class Billete {
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
  varbilletes()
  {
    x = (this.valor);
    y = (this.cantidad);
  }
  darbilletes()
  {
    document.write("<p> Se han retirado " + papeles + " billetes de " + x +"<br /></p>");
    document.body.appendChild(this.imagen);
  }
}

var x;
var y;
var papeles;

var texto = document.getElementById("cantidad_dinero");

function jesbran()
{
  var dinero = parseInt(texto.value);
  for (var b of caja)
  {
    b.varbilletes();
    if (dinero > 0)
    {
      var div = Math.floor(dinero / x);
      //console.log(div);
      if (div > y)
      {
        papeles = y;
        //console.log(papeles);
      }
      else
      {
        papeles = div;
        //console.log(papeles);
      }
      if (papeles > 0)
      {
        b.darbilletes();
      }
      entregado.push(new Billete(x, papeles));
      dinero = dinero - (x * papeles);
    }
  }
}

caja = [];
entregado = [];
caja.push(new Billete(100, 5));
caja.push(new Billete(50, 5));
caja.push(new Billete(20, 5));
caja.push(new Billete(10, 5));
