        // Tu código existente del árbol
        document.addEventListener("DOMContentLoaded", () => {
            let hojas = "";
            const maxWidth = 15;
            const rows = [10, 2];

            rows.forEach((row, idx) => {
                for (let i = 0; i < row; i++) {
                    const espacios = maxWidth - i;
                    const estrellas = 1 + i * 2;
                    hojas += 
                        "<div style='text-align: center;'>" +
                        "&nbsp;".repeat(espacios) + 
                        `<span class='rojo'>${"*".repeat(estrellas)}</span>` +
                        "&nbsp;".repeat(espacios) + 
                        "</div>";
                }
            });

            document.getElementById("arbol").innerHTML = hojas;
            let animacion = document.querySelectorAll(".rojo");
            animacion.innerHTML = hojas;
            function animar(){
                for( var i =0 ; i<animacion.length; i++){
                    let tiempo = i/20 +1
                    animacion[i].style.animation = "colores "+tiempo+"s infinite"
                }
            }
            window.addEventListener('load',animar)
        });

        function validarCodigo() {
            const codigoIngresado = document.getElementById("codigo").value;
            const codigoCorrecto = "19042024";

            if (codigoIngresado === codigoCorrecto) {
                document.getElementById("mensaje").style.display = "block";
            } else {
                alert("Código incorrecto, intenta de nuevo.");
            }
        }
