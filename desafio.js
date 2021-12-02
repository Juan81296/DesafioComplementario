let buyButtons = document.querySelectorAll(".buyButton");

console.log(buyButtons);

let carrito = [];

for(let button of buyButtons){


    button.addEventListener("click", addShopingCart);



}

function addShopingCart(e){


    let hijo = e.target;
    let padre = hijo.parentNode.parentNode;
    let producto = padre.querySelector("h5").textContent;
    let parrafo = padre.querySelector("p").textContent;


    let compra = {

        producto: producto,
        descripcion: parrafo,
    };

    carrito.push(compra);

    let div = document.getElementById("div");
    
        let nuevoh2 = document.createElement("h2");
    
            nuevoh2.innerHTML =  `<h2>Aqui debajo, la compra realizada: </h2><br>
    
                              Usted ha adquirido:${producto}`
                              
                              ;
       
       
        div.appendChild ( nuevoh2 );

}
