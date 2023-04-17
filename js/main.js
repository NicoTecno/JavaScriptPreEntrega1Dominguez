/*Constantes Goblaes con los precios */
const precio_lays = 400;
const precio_cheetos = 500;
const precio_doritos = 450;
const precio_palitos = 200;
const precio_nachos = 350;

function Mensaje_Producto_Seleccionado(producto_seleccionado, monto) {
  if (monto <= 0) {
    monto = 0;
  }
  alert(
    `Usted seleccionó ${producto_seleccionado} y el monto a pagar son $ ${monto}`
  );
}

function ir_a_pagar(monto) {
  let pagado = 0;
  let falta_pagar = monto;
  while (pagado < monto) {
    let billete_ingresado = Number(
      prompt(
        `Ingrese el billete a la maquina por favor, falta pagar ${falta_pagar}`
      )
    );
    if (billete_ingresado <= 0) {
      alert("Billete no valido");
      continue;
    }
    pagado = pagado + billete_ingresado;
    falta_pagar = falta_pagar - billete_ingresado;
  }

  if (pagado > monto) {
    let seguir_comprando = prompt(
      `Usted pago mas de lo debido, quiere usar ese dinero par comprar algo mas? el monto a su favor es de ${
        pagado - monto
      } S/N`
    );

    while (true) {
      if (seguir_comprando.toLowerCase() == "s") {
        return pagado - monto;
      } else if (seguir_comprando.toLowerCase() == "n") {
        alert("Gracias por la propina y vuelva pronto :)");
        return 0;
      } else {
        seguir_comprando = prompt(`La respuesta no es valida
        Usted pago mas de lo debido, quiere usar ese dinero par comprar algo mas? el monto a su favor es de ${
          pagado - monto
        } S/N`);
      }
    }
  }
  return 0;
}

function maquina_snacks() {
  alert(`Bienvenido a la mquina de Snacks
    Seleccione un producto y para finalizar ingrese los billetes para finalizar el pago`);
  let plata_a_favor = 0;
  let es_primer_compra = true;
  let producto_seleccionado;
  let monto;
  while (true) {
    if (!es_primer_compra) {
      alert(
        `el monto de ${plata_a_favor} se le restará de su pedido al finalizar la elección del producto`
      );
    }
    producto = Number(
      prompt(`Snack 
          1. Papas Lays ($ ${precio_lays})
          2. Cheetos (${precio_cheetos})
          3. Doritos (${precio_doritos})
          4. Palitos (${precio_palitos})
          5. Nachos (${precio_nachos})
          6. Salir de la maquina
          `)
    );
    switch (producto) {
      case 1:
        producto_seleccionado = "Papas Lays";
        monto = precio_lays - plata_a_favor;
        Mensaje_Producto_Seleccionado(producto_seleccionado, monto);
        plata_a_favor = ir_a_pagar(monto);
        break;

      case 2:
        producto_seleccionado = "Cheetos";
        monto = precio_cheetos - plata_a_favor;
        Mensaje_Producto_Seleccionado(producto_seleccionado, monto);
        plata_a_favor = ir_a_pagar(monto);
        break;

      case 3:
        producto_seleccionado = "Doritos";
        monto = precio_doritos - plata_a_favor;
        Mensaje_Producto_Seleccionado(producto_seleccionado, monto);
        plata_a_favor = ir_a_pagar(monto);
        break;

      case 4:
        producto_seleccionado = "Palitos";
        monto = precio_palitos - plata_a_favor;
        Mensaje_Producto_Seleccionado(producto_seleccionado, monto);
        plata_a_favor = ir_a_pagar(monto);
        break;

      case 5:
        producto_seleccionado = "Nachos";
        monto = precio_nachos - plata_a_favor;
        Mensaje_Producto_Seleccionado(producto_seleccionado, monto);
        plata_a_favor = ir_a_pagar(monto);
        break;
      case 6:
        return;
    }
  }
}

maquina_snacks();
