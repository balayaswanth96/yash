
var expander = $('.expand');
  expander.click ( function () {
   var ul = $(this).parent().children()[2];
   this.classList.toggle("active");
   debugger;
    if (ul.style.display === 'block') {
      ul.style.display = 'none';
    } else {
      ul.style.display = 'block';
    }
  });

//adding new employee.
function add_new() {
 var t=$("#tech");
 var x1=$("#sap");
 var x2=$("#java");
 var x3=$("#jdsn");
 var y1=$("#sr");
 var y2=$("#jr");
  
  var n=$("#new_name");
  var cap=n[0].value.toUpperCase();
  if (n[0].value != "" ){

 /*sap selected*/
 if( x1[0].checked == true) { if(y1[0].checked == true ) {

 $("#sap_sr").append($('<li>').append($('<a>').append($('<input>').attr('type','radio').attr('name','field' ).attr( 'class','emp')).append(cap)));
  alert("you have successfully added an employee.");
 //to hide the add form
 add_record();
 }else if (y2[0].checked == true )  {
 $("#sap_jr").append($('<li>').append($('<a>').append($('<input>').attr('type','radio').attr( 'name','field' ).attr('class','emp')).append(cap)));
  alert("you have successfully added an employee.");
 //to hide the add form
 add_record();
 }else{
alert("please fill the valid details.");
}
 }

/*java selected	*/ 
 else if( x2[0].checked == true) { if(y1[0].checked == true ) {
$("#java_sr").append($('<li>').append($('<a>').append($('<input>').attr('type','radio').attr( 'name','field' ).attr('class','emp')).append(cap)));
 alert("you have successfully added an employee.");
  //to hide the add form
 add_record();
} else if (y2[0].checked == true)  {
$("#java_jr").append($('<li>').append($('<a>').append($('<input>').attr('type','radio').attr( 'name','field' ).attr('class','emp')).append(cap)));
 alert("you have successfully added an employee.");
  //to hide the add form
 add_record();
}
else{
alert("please fill the valid details.");
}
}
/*jdsn selected*/
 else if( x3[0].checked == true) { if(y1[0].checked == true ) {
$("#jdsn_sr").append($('<li>').append($('<a>').append($('<input>').attr('type','radio').attr( 'name','field' ).attr( 'class','emp')).append(cap)));
  alert("you have successfully added an employee.");
   //to hide the add form
 add_record();
}else if (y2[0].checked == true ) {
$("#jdsn_jr").append($('<li>').append($('<a>').append($('<input>').attr('type','radio').attr( 'name','field' ).attr('class','emp')).append(cap)));
 alert("you have successfully added an employee.");
  //to hide the add form
 add_record();
}
else{
alert("please fill the valid details.");
}
}
else{
alert("please fill the valid details.");
}

x1[0].checked = false;
x2[0].checked = false;
x3[0].checked = false;
y1[0].checked = false;
y2[0].checked = false;
document.getElementById("new_name").value="";

 }
 else{
 alert("please fill the valid details.");
x1[0].checked = false;
x2[0].checked = false;
x3[0].checked = false;
y1[0].checked = false;
y2[0].checked = false;
document.getElementById("new_name").value="";
 }
}

//to display the add employee form.
function add_record() {
$(".add_form").toggle();
}
//to delete 
function delete_record() {
	var c1 = document.getElementsByClassName("emp");
	var ad = document.getElementsByClassName("admin");
	var st ="false";
	 for(i=0;i<c1.length;i++){
	  if ( c1[i].checked ){
	    $(c1[i]).parent().parent().remove();
	   alert("you have successfully removed the employee.");
	   st="true";
	  }
	  }
	  if( st == "false"){
	 alert("Please Select An Employee");
	 }
	  for(j=0;j<ad.length;j++){
	  if ( ad[j].checked ){
	   	   alert("you don't have access");
	  }
	  }
	  }

 document.getElementById("sea").addEventListener("click",my);
 function my() {
var  s = document.getElementById("myInput").value.toUpperCase();	
var  f ="false";
 var dat= document.getElementsByTagName("a");
 for (i=0;i<dat.length;i++){
 if ( s == dat[i].innerText ){
	 //to expand
	dat[i].parentElement.parentElement.style.display = "block";
	dat[i].parentElement.parentElement.parentElement.parentElement.style.display = "block";
	dat[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "block";
	dat[i].style.backgroundColor="#33cccc";
	//to change the sign + to -
	var pl=dat[i].parentElement.parentElement.parentElement;
	pl.querySelector(".expand").classList.toggle("active");
	pl.parentElement.parentElement.querySelector(".expand").classList.toggle("active");
	pl.parentElement.parentElement.parentElement.parentElement.querySelector(".expand").classList.toggle("active");

 f="true";
 break;
 }
 }
	 if( f == "false"){
 alert("search item not found");
 }
 else{
  alert("found");
 }
 }
	

