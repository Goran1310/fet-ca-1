// Use this file to populate the Table in the ‘personal’ section as follows, using Vanilla JavaScript:

// You need to have 5 rows of data.
// Populate the table with data of your choice that is relevant to the table headers.
// The Table needs to be populated from the 'table.js' file you have created

var array = [
    ['Car', '4 wheels', '180km/h','17k$'],
    ['Train', '2 wheels', '200km/h', '13m$'],
    ['Bike', '2 wheels', '30km/h', '1k$'],
    ['Airplane', '3 wheels', '350km/h', '43M$'],
    ['Truck', '6 wheels', '90km/h', '130k$']
  ] // Creating a data array which a loop will source from

var table = document.getElementById("#personalTable");
let tbody = document.getElementsByTagName("tbody")[0];
tbody.style.border = "thick solid #0000FF";
array.forEach(function(row) {
  var tr = tbody.insertRow(); //Create a new row
  const td = document.createElement("td");// Drew the main table node on the document
  const img = document.createElement("img");
  row.forEach(function(column) {
    var td = tr.insertCell();
    tr.appendChild(img);
    td.innerText = column; // Take string from placeholder variable and append it to <tr> node
  });
});
let img = document.getElementsByTagName("img")
img[1].setAttribute("src", "./img/van-2-150x150.webp")
img[2].setAttribute("src", "./img/train-6-150x150.webp")
img[3].setAttribute("src", "./img/mountain-bike-4-150x150.webp")
img[4].setAttribute("src", "./img/airplane-3-150x150.webp")
img[5].setAttribute("src", "./img/dump-truck-3-150x150.webp")

//  The following functionality needs to be implemented in the ‘table.js’ file, using jQuery:

// When one of the images in the Table is clicked, the image needs to be displayed in a new window in your web browser.
img[1].setAttribute("id", "img1");
img[2].setAttribute("id", "img2");
img[3].setAttribute("id", "img3");
img[4].setAttribute("id", "img4");
img[5].setAttribute("id", "img5");
const windowFeatures = "left=100,top=100,width=320,height=320";
$('#img1').click(function(){
  window.open("./img/van-2-150x150.webp", 'window name', windowFeatures);
  return false;
});
$('#img2').click(function(){
  window.open("./img/train-6-150x150.webp", 'window name', windowFeatures);
  return false;
});
$('#img3').click(function(){
  window.open("./img/mountain-bike-4-150x150.webp", 'window name', windowFeatures);
  return false;
});
$('#img4').click(function(){
  window.open("./img/airplane-3-150x150.webp", 'window name', windowFeatures);
  return false;
});
$('#img5').click(function(){
  window.open("./img/dump-truck-3-150x150.webp", 'window name', windowFeatures);
  return false;
});
// The table’s odd rows need to change font color when the mouse hovers over them, changing font color back to black once the mouse stops hovering over them.
$( "tr:odd" ).hover(
  function() {
    $( this ).addClass( "hover" );
    $( this ).children().first().css( "background-color", "#D3D3D3" );
    $( this ).children().last().css( "background-color", "#D3D3D3" );
    $( this ).css( "color", "blue" );
  }, function() {
    $( this ).removeClass( "hover" );
    $( this ).css( "color", "black" );
    $( this ).children().first().css( "background-color", "" );
    $( this ).children().last().css( "background-color", "" );

  }
);