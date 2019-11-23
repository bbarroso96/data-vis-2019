//<script async src="https://cse.google.com/cse.js?cx=008344922520587658943:kunfp2xcyyo"></script>

function search(querryItem) {
  var url = `https://cse.google.com/cse.js?cx=008344922520587658943:kunfp2xcyyo&?q=${querryItem}`;

  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);


  xhttp.onreadystatechange = function() {
    //Função a ser chamada quando a requisição retornar do servidor
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      //Verifica se o retorno do servidor deu certo
      console.log(xhttp.responseText);
    }
  };

  xhttp.send();
  document.getElementById("card-text").innerHTML = xhttp.responseText;
}
