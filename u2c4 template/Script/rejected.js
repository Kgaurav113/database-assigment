
    var reject=JSON.parse(localStorage.getItem("rejected"));
    reject.map(function(elem){
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
        row.append(col1,col2,col3,col4,col5);
        document.querySelector("#body").append(row)
        
    });