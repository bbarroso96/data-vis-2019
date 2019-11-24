//<script async src="https://cse.google.com/cse.js?cx=008344922520587658943:kunfp2xcyyo"></script>

/* function search(querryItem, date) {
  var url = `https://cors-anywhere.herokuapp.com/https://www.googleapis.com/customsearch/v1?q=${querryItem}&cx=008344922520587658943%3Akunfp2xcyyo&key=AIzaSyDMq1Fk8N8GORYadfLGY_bBQTYbjE5-rKw`;

  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);

  xhttp.onreadystatechange = function() {
    //Função a ser chamada quando a requisição retornar do servidor
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      //Verifica se o retorno do servidor deu certo
      console.log('Retorno Ok, Json a seguir');
      var jsonParsed = JSON.parse(xhttp.response);
      console.log(jsonParsed);
      document.getElementById(
        "card-search"
      ).innerHTML = `<p>${jsonParsed.items[0].htmlSnippet}</p>
      <p> Link : ${jsonParsed.items[0].link}</p>
      `;
    }
  };

  xhttp.send();
} */

async function search(querryItem, date, DEBUG_FLAG) {
  console.log('DEBUG MODE IS = ' + DEBUG_FLAG);
  var afterDate = new Date(date);
  var beforeDate = new Date(date);
  afterDate.setDate(afterDate.getDate() - 1);
  beforeDate.setDate(beforeDate.getDate() + 1);
  var afterDateString = afterDate.toISOString();
  afterDateString = afterDateString.substring(0, afterDateString.indexOf("T"));
  var beforeDateString = beforeDate.toISOString();
  beforeDateString = beforeDateString.substring(
    0,
    beforeDateString.indexOf("T")
  );

  var url = `https://cors-anywhere.herokuapp.com/https://www.googleapis.com/customsearch/v1?q=${querryItem} after:${afterDateString} before:${beforeDateString}&cx=008344922520587658943%3Akunfp2xcyyo&key=AIzaSyDMq1Fk8N8GORYadfLGY_bBQTYbjE5-rKw`;
  if (DEBUG_FLAG == true) {
    const response = await fetch(
      "https://raw.githubusercontent.com/anorneto/data-vis-2019/master/data/api_mock.json"
    );
    const jsonParsed = await response.json();
    return jsonParsed;
  } else {
    const response = await fetch(url);
    const jsonParsed = await response.json();
    return jsonParsed;
  }
}
