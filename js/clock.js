setInterval(current_time ,1000);

function current_time() {
  var d = new Date();
  document.getElementById("time").innerHTML=d.toLocaleTimeString();
}
