var databaseArr=JSON.parse(localStorage.getItem("databaseList"));
var accept=JSON.parse(localStorage.getItem("admitted"))||[];
var reject=JSON.parse(localStorage.getItem("rejected"))||[];
console.log(databaseArr);
databaseArr.map(function(elem)
{
    var row=document.createElement("tr");

    var col1=document.createElement("td");
    col1.innerText=elem.sname;

    var col2=document.createElement("td");
    col2.innerText=elem.sage;

    var col3=document.createElement("td");
    col3.innerText=elem.sgender;

    var col4=document.createElement("td");
    col4.innerText=elem.semail;

    var col5=document.createElement("td");
    col5.innerText=elem.sphone;

    var col6=document.createElement("button");
    col6.innerText="accept";
    col6.addEventListener("click",function(){
        markaccept(elem);
    });

    var col7=document.createElement("button");
    col7.innerText="reject";

    col7.addEventListener("click",function(){
markreject(elem);
    });
    row.append(col1,col2,col3,col4,col5,col6,col7);
    document.querySelector("#body").append(row);
});
function markaccept(elem)
{
    console.log(elem);
    accept.push(elem);
    localStorage.setItem("admitted",JSON.stringify(accept));
}
function markreject(elem)
{
    console.log(elem)
    reject.push(elem);
    localStorage.setItem("rejected",JSON.stringify(reject));
}



