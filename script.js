document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('container').removeAttribute("hidden");

        document.getElementById('c-loader').setAttribute("hidden", "false");
    }, 20);

    
});


function Form(){
   document.getElementById('text').style.cssText = 'display: none;';
   document.getElementById('form').style.cssText = 'display: block;';
}
function Ministerio(resposta){
    if (resposta == "Outro") {
        document.getElementById('ministerio').removeAttribute("hidden");
    }else{
        document.getElementById('ministerio').setAttribute("hidden","true");
    };
}
function Criancas(resposta){
    if (resposta == "Sim") {
        document.getElementById('criancas').removeAttribute("hidden");
    }else{
        document.getElementById('criancas').setAttribute("hidden","true");
    };
}

function Gravar(nome, telefone){

    fetch("https://sheetdb.io/api/v1/y6wzxu5btyj7l", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        data: [
            {
                'Nome': nome,
                'Telefone': telefone,
            }
        ]
    }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Success:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
 }