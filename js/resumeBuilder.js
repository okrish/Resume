/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name= "Vamsi Krishna";
var role= "Web Developer";

/* Name */
var myName = HTMLheaderName.replace("%data%", name);
$("#header").append(myName);

/*Role*/
var myRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(myRole);