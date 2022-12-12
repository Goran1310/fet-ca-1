

var array = [
    ['#3214', '</>', 'description','info'],
    ['#3215', '</img>', 'description','info'],
    ['#3216', '</>', 'description','info'],
    ['#3217', '</>', 'description','info'],
    ['#3218', '</>', 'description','info'],
  ] // Creating a data array which a loop will source from

var table = document.getElementById("personalTable")
// document.body.appendChild(table); // Drew the main table node on the document

array.forEach(function(row) {
  var tr = table.insertRow(); //Create a new row
  var img = document.createElement('img');
 
  row.forEach(function(column) {
    var td = tr.insertCell();
    tr.appendChild(img);
    td.innerText = column; // Take string from placeholder variable and append it to <tr> node
  });
});
const tr = document.querySelectorAll("tr");
const td = document.createElement("td");
const img = document.querySelectorAll("img");

// img[0].src = "https://picsum.photos/200/301"; // image 1
img[1].src = "./img/170-200x302.jpeg"; // image 2
img[2].src = "./img/42-200x305.jpeg"; // image 3
img[3].src = "./img/277-200x304.jpeg"; // image 4
img[4].src = "./img/341-200x304.jpeg"; // image 5
img[5].src = "./img/927-200x304.jpeg"; // image 5
img[1].setAttribute("id","img1");
img[2].setAttribute("id","img2");
img[3].setAttribute("id","img3");
img[4].setAttribute("id","img4");
img[5].setAttribute("id","img5");

// Functionality needs to be implemented in the ‘table.js’ file, using jQuery
// When one of the images in the Table is clicked, the image needs to be displayed in a new window in your web browser.
$("#img1").click(function(){
    window.open("./img/170-200x302.jpeg", 'coffe bar', 'width=452,height=425 top=200,left=600');
    return false;
  });
$("#img2").click(function(){
    window.open("./img/42-200x305.jpeg", 'coffe bar', 'width=452,height=425 top=200,left=600');
    return false;
  });
$("#img3").click(function(){
    window.open("./img/277-200x304.jpeg", 'coffe bar', 'width=452,height=425 top=200,left=600');
    return false;
  });
$("#img4").click(function(){
    window.open("./img/341-200x304.jpeg", 'coffe bar', 'width=452,height=425 top=200,left=600');
    return false;
  });
$("#img5").click(function(){
    window.open("./img/927-200x304.jpeg", 'coffe bar', 'width=452,height=425 top=200,left=600');
    return false;
  });

//   The table’s odd rows need to change font color when the mouse hovers over them
$('#personalTable tr:odd').hover(function() {
    $(this).addClass("hover");
    $(this).css("color", "blue");
}, function() {
    $(this).removeClass('hover');
    $(this).css("color", "black");
});
// changing font color back to black once the mouse stops hovering over them.
$('#personalTable tr:odd').click(function()
  {  
    $(this).removeClass('hover');
    $(this).css("color", "black");
  });

