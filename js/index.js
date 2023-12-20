/* window for browser 
window.alert("hi")
/* document for html 
document.getElementById("xxx").innerHTML="بترجم ال html"

document.getElementById("xxx").innerText="كله زى ما هو"
console.log(" بيظهر فى جزء ال  CONSOL ")
window.alert("windows");
/* consol 
console.log("consol");
prompt("enter data");
*/


/*  --1--   Write a program that allow to user enter number then printit*/
/*var x = window.prompt(" ass 1 Enter A number");
console.log(x);

x = window.prompt(" ass 10 - Enter A number");

for (var i= 0 ; i < 12  ; i++)
console.log((i+1)*x);*/

var sitetName=document.getElementById("sitetName")
var siteURL=document.getElementById("siteURL")
var myRow = document.getElementById("myRow")
var myBtn = document.getElementById("myBtn")
var searchInput = document.getElementById("searchInput")

var sitetList = [];
var updatedIndex


function addSite()
{   
    
    var Sname = /^\w{3,}(\s+\w+)*$/;
    var Surl  = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
    if (Sname.test(sitetName.value) && Surl.test(siteURL.value))
    {
        console.log("fff");
        var currSite = { 
                    name:sitetName.value,
                    url:siteURL.value
                    }
    sitetList.push(currSite);
    displaysites(sitetList);
    clearInputs();
   }
   else {console.log("vvvvvvvvvvvvvvvvvv")}

}



function deleteSite(index){
sitetList.splice(index,1)
displaysites(sitetList)
}


function displaysites(slist)
{
var displayedRows = "";
for (i=0;i<slist.length; i++)
    {
    displayedRows +=`<tr>   
                     <td>${i}</td>
                     <td>${slist[i].name}</td>
                     <td><button  onclick="${slist[i].url}" class="btn btn-success">Visite</button></td>                
                     <td><button  onclick="deleteSite(${i})" class="btn btn-danger">Delete</button></td>                
                     
                     </tr>`                       

    }
myRow.innerHTML = displayedRows;
    
}


function clearInputs()
{
sitetName.value="";
siteURL.value="";

}
