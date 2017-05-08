// Create a new list item when clicking on the "Add" button
function myElement(){
  var li= document.createElement("li"); //create a new list element
  var input= document.getElementById("myInput").value;
  var text= document.createTextNode(input); //create a text node containing our input
  li.appendChild(text); 
  if (input===''){
    alert("write something dummy!");
  }
  else{
    document.getElementById("myUL").appendChild(li); //append 
  }
  document.getElementById("input").value= ""; //reset value of input
  document.getElementById("myInput").value= "Text..."


  // var span = document.createElement("SPAN");
  // var txt = document.createTextNode("\u00D7");
  // span.className= "close";
  // span.appendChild(txt);
  // li.appendChild(span);

  // for (i=0; i<close.length; i++){
  //   close[i].onclick = function(){
  //     var div= this.parentElement;
  //     div.style.display = "none"; 
  //   }
  // }


}



// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }
// Try it Yourself »
