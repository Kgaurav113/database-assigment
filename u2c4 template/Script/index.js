
    document.querySelector("#form").addEventListener("submit",formSubmit)
    var databaseArr=JSON.parse(localStorage.getItem("databaseLIst"))||[];
    function formSubmit(event)
     {
event.preventDefault();
{
 
var studentObj={
 sname:document.querySelector("#name").value,
     sage:document.querySelector("#age").value,
    sgender:document.querySelector("#gender").value,
     semail:document.querySelector("#email").value,
      sphone:document.querySelector("#phone").value,
    
   

};
databaseArr.push(studentObj);
     console.log(databaseArr);
     localStorage.setItem("databaseList",JSON.stringify(databaseArr));
    }
}