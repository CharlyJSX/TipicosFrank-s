function pagarClicked(){


    const tituloNombre = document.querySelectorAll("#titulo");
    const precioElemento = document.querySelectorAll("#precio");    
    const cantidadActual = document.querySelectorAll("#cantidad");

    let arrayTitulos = [];
    let arrayPrecios = [];
    let arraycantidadActual = [];


    for(let i=0; i<tituloNombre.length; i++){
        arrayTitulos.push(tituloNombre[i].innerHTML);
        arrayPrecios.push(precioElemento[i].innerHTML);
        arraycantidadActual.push(cantidadActual[i].value);
        
    }

/*
    var cantidad = cantidadActual.value;
    total = total + (precioElemento * cantidad);
    total = Math.round(total * 100)/100;
*/

    console.log(arrayTitulos);
    console.log(arrayPrecios);
    console.log(arraycantidadActual);


    // const name = "Charly";


    let mensajeFinal = [];
    
    for(let i=0; i<arrayTitulos.length; i++){
        mensajeFinal.push("\n" + arraycantidadActual[i] + " " + arrayTitulos[i] + " " + arrayPrecios[i]);
    }

    console.log(mensajeFinal);

    let name = "Lic. Roberto";
    const totalAPagar = document.querySelector(".carrito-precio-total").innerHTML;
    
    const mensaje = `Hola ${name}, quiero estos producos:\n ${mensajeFinal}\n\n Total a pagar ${totalAPagar}`;
    
        const url = `https://api.whatsapp.com/send/?phone=50370487059&text=${encodeURIComponent(mensaje)}&type=phone_number&app_absent=0`;
        window.open(url, '_blank');  
        console.log(mensaje);
    

    actualizarTotalCarrito();
    ocultarCarrito();
}
