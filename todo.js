
function updateItemStatus() {
	var boxId= this.id;
	boxId=this.id.replace("cb_", "");
	itemText= document.getElementById("item_"+boxId);

	console.log(this.checked);
	if (this.checked==true){
		itemText.style.textDecoration= "line-through";
	}
	else{
		itemText.style.textDecoration= "none";
	}

}

function addNewItem(list, itemText){
	var listItem= document.createElement("li"); //Create new li htm
	var checkBox= document.createElement("input");
	checkBox.type= "checkbox";
	checkBox.id= "cb_" + totalItems; 

	var span= document.createElement("span");
	span.id = "item_"+ totalItems; 
	span.innerText= itemText;
	listItem.appendChild(checkBox);
	listItem.appendChild(span);
	list.appendChild(listItem); //Append new item to list

	//cross out at checked box
	checkBox.onclick= updateItemStatus;
	totalItems++; 

}

var totalItems= 1; 
var btnNew= document.getElementById("btnAdd");
var inItemText= document.getElementById("inItemText");
inItemText.focus();

inItemText.onkeyup = function(event){
	//only enter if "enter" key was pressed
	if (event.which==13){
		var itemText= inItemText.value;
		if(!itemText || itemText== "" || itemText== " "){
		return false;
	}
	
	addNewItem(document.getElementById("todoList"), itemText); //sets html list 
	inItemText.focus();
	inItemText.value= "";
	}
};
//Add button functionality
document.getElementById("btnAdd").onclick= addNewItem(document.getElementById("todoList"), itemText); 

//w/()-> what funct returns is what happens. D/n use ()
