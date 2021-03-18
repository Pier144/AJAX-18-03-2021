var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 1) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
      
    htmlString += "Id dell'utente = " + data[i].id;
    htmlString += '</p>';
    htmlString += "Titolo: " + data[i].title + '</p>';
    htmlString += "Commento: " + data[i].body + '</p>' + '</p>'+ '</p>'+ '</p>';

  }

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}