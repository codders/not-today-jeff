let banner = document.createElement("div");
let div = document.createElement("div");
let row1 = document.createElement("div");
let row2 = document.createElement("div");
let headline = document.createElement("p");
headline.textContent = "Today is a Global Amazon Strike Day!";
let description = document.createElement("p");
description.appendChild(document.createTextNode("If you want to hide this banner to continue shopping, at least "));
let link = document.createElement("a");
link.textContent = "tell a friend";
link.setAttribute("href", "https://nottodayjeff.codders.io/invite-friend.html");
link.setAttribute("target", "_blank");
description.appendChild(link);
description.appendChild(document.createTextNode(" about the strike."));
row1.appendChild(headline);
row2.appendChild(description);
div.appendChild(row1);
div.appendChild(row2);
banner.appendChild(div);

let close = document.createElement("div");
let closeButton = document.createElement("p");
closeButton.textContent = "x";
close.appendChild(closeButton);
banner.appendChild(close);

document.body.appendChild(banner);

headline.style.display = "table-cell";
headline.style.verticalAlign = "bottom";
headline.style.fontSize = "2rem";
headline.style.fontWeight = "bold";
headline.style.color = "white";
headline.style.padding = "0.5rem";

row1.style.display = "table-row";
row2.style.display = "table-row";

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
banner.style.top = "25%";
banner.style.width = "100%";
banner.style.zIndex = "9999";
banner.style.background = "red";
banner.style.height = "50%";
banner.style.textAlign = "center";

closeButton.onclick = function() {
  banner.remove();
};
