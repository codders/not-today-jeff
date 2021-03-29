let banner = document.createElement("div");
let div = document.createElement("div");
let row1 = document.createElement("div");
let row2 = document.createElement("div");
let row3 = document.createElement("div");
let jeff = document.createElement("h1");
jeff.textContent = "Not Today, Jeff!";
let headline = document.createElement("p");
headline.textContent = "Today is a Global Amazon Strike Day";
let description = document.createElement("p");
description.appendChild(document.createTextNode("If you want to hide this banner to continue shopping, at least "));
let link = document.createElement("a");
link.textContent = "tell a friend";
link.setAttribute("href", "https://nottodayjeff.codders.io/invite-friend.html");
link.setAttribute("target", "_blank");
description.appendChild(link);
description.appendChild(document.createTextNode(" about the strike."));
row1.appendChild(jeff);
row2.appendChild(headline);
row3.appendChild(description);
div.appendChild(row1);
div.appendChild(row2);
div.appendChild(row3);
banner.appendChild(div);

let close = document.createElement("div");
let closeButton = document.createElement("p");
closeButton.textContent = "x";
close.appendChild(closeButton);
banner.appendChild(close);

jeff.style.display = "table-cell";
jeff.style.fontSize = "3rem";
jeff.style.verticalAlign = "middle";
jeff.style.textTransform = "uppercase";
jeff.style.color = "white";
jeff.style.fontWeight = "bold";

headline.style.display = "table-cell";
headline.style.verticalAlign = "bottom";
headline.style.fontSize = "2rem";
headline.style.fontWeight = "bold";
headline.style.color = "white";
headline.style.padding = "0.5rem";

row1.style.display = "table-row";
row2.style.display = "table-row";
row3.style.display = "table-row";

div.style.display = "table";
div.style.height = "100%";
div.style.width = "100%";

close.style.position = "absolute";
close.style.right = "0";
close.style.top = "0";
close.style.height = "100%";
close.style.padding = "5px 10px";

closeButton.style.cursor = "pointer";

banner.style.position = "fixed";
banner.style.top = "33%";
banner.style.width = "100%";
banner.style.zIndex = "9999";
banner.style.background = "red";
banner.style.height = "33%";
banner.style.textAlign = "center";

closeButton.onclick = function() {
  banner.remove();
};

timer = document.createElement("p");
timer.textContent = "Timer is coming";
timer.style.display = "block";
timer.style.position = "fixed";
timer.style.bottom = "0";
timer.style.background = "#fd0";
timer.style.width = "100%";
timer.style.textAlign = "center";

var startDate;
var endDate;

function plural(number) {
  if (number == 1) {
      return "";
  }
  return "s";
}

function pad(number) {
  if (number < 10) {
      return "0" + number;
  }
  return "" + number;
}

function updateTimer() {
  if (startDate > new Date() && startDate < endDate) {
    var seconds = Math.floor((startDate - new Date())/1000);
    var secondPart = seconds % 60;
    var minutePart = Math.floor(seconds / 60) % 60;
    var hourPart = Math.floor(seconds / 60 / 60);
    var countdown = hourPart + " hour" + plural(hourPart) + " " + 
        pad(minutePart) + " minute" + plural(minutePart) + " " + 
        pad(secondPart) + " second" + plural(secondPart);
    timer.textContent = countdown + " until the next global Amazon strike";
    setTimeout(updateTimer, 1000);
  } else {
    timer.remove();
    document.body.appendChild(banner);
  }
}

fetch('https://nottodayjeff.codders.io/scripts/next-strike.php', {mode: 'cors'}).then(function(response) {
  if (response.status !== 200) {
    console.log("Error reading global strike date", response.status);
    return;
  }
  response.json().then(function(data) {
    startDate = new Date(data.start);
    endDate = new Date(data.end);
    if (data.onStrike == true) {
      console.log("Strike is happening! showing banner");
      document.body.appendChild(banner);
    } else {
      console.log("No strike is happening. showing timer");
      document.body.appendChild(timer);
      updateTimer();
    }
  })
}).catch(function(err) {
  console.log("Fetch failed", err);
});
