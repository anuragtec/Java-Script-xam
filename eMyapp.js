// function valid(){
   
//     var name1 = document.getElementById("#reasonName").value;


//     if(name1 == "")
//     {
//         document.getElementById("#reasonError").innerHTML = "Please enter name input";
//         return false;
//     }
// }


function valid(){

    var cname = document.myform.Vname.value;
    var camount = document.myform.Vamount.value;
    var ctype = document.myform.Vtype.value;
    var ccurrency = document.myform.Vcurency.value;
    var cfriend = document.myform.Vfriend.value;
    var cdate = document.myform.Vdate.value;

    if( cname == null || cname == "")
    {
        document.getElementById("reasonError").innerText = "Please enter valid name";
        return false;
    }

    if(!isNaN(cname))
    {
        document.getElementById('reasonError').innerHTML = "Numbers not allowed!";
        return false;
    }

    if( ctype == null || ctype == "")
    {
        document.getElementById("amountError").innerHTML = "enter amount";
    }

    if( camount == null || camount == "")
    {
        document.getElementById("typeError").innerHTML = "select type";
    }

    if( ccurrency == null || camount == "")
    {
        document.getElementById("currencyError").innerHTML = "select currency";
    }

    if( cfriend == null || camount == "")
    {
        document.getElementById("friendError").innerHTML = "select type";
    }

    if( cdate == null || camount == "")
    {
        document.getElementById("dateError").innerHTML = "select date";
    }
}


// --------------button table element scripting---------------------------

let btnAdd = document.querySelector("#addButton");
let tableAdd = document.querySelector("#tableSelect");

// -------------------selecting user inputs---------------------------- 

let typeInput = document.querySelector("#payType");
let nameInput = document.querySelector("#reasonName");
let friendInput = document.querySelector("#friend");
let dateInput = document.querySelector("#dateVal")
let amountInput = document.querySelector("#amount")

// ------------------------- on click event / row insertion ------------------

btnAdd.addEventListener('click', () => {
    
    let typeI = typeInput.value;
    let rName = nameInput.value;
    let friendI = friendInput.value;
    let dateI = dateInput.value;
    let amountI = amountInput.value;

     let template = ` 
                    <tr>
                        <td> ${typeI} </td> 
                        <td> ${rName} </td>
                        <td> ${friendI} </td>
                        <td> ${dateI} </td>
                        <td> ${amountI} </td>
                    </tr>
                    `;
 
    tableAdd.innerHTML += template;
});

