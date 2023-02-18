var selectedRow = null;
//show alert
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    const para = document.createElement("p");
    para.innerHTML = message;
     div.appendChild(para);
     const container = document.querySelector(".container");
     const main = document.querySelector(".main");
     container.insertBefore(div, main);

     setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

//clear all fields

function clearFields(){
    document.querySelector("#name").value ="";
    document.querySelector("#email").value ="";
    document.querySelector("#dob").value ="";
    document.querySelector("#gender").value ="";
    document.querySelector("#hobby").value ="";
    document.querySelector("#country").value ="";
    document.querySelector("#state").value ="";
//    document.querySelector("#city").value ="";
}

// add data
document.querySelector("#basic-form").addEventListener("submit",(e) =>{
    e.preventDefault();

    //get form values
    const name=document.querySelector("#name").value;
    const email=document.querySelector("#email").value;
    const dob=document.querySelector("#dob").value;
     const gender=document.querySelector("#gender").value;
     const hobby=document.querySelector("#hobby").value;
     const country=document.querySelector("#country").value;
     const state=document.querySelector("#state").value;
  //   const city=document.querySelector("#city").value;

     //validate
     if(name == "" || email == "" || dob == "" || gender == "" || hobby == "" || country == "" || state == ""){
        showAlert("Please fill in all fields", "danger");
     }
     else{
        if(selectedRow == null){
            const list=document.querySelector(".form-list");
            const row=document.createElement("tr");
            row.innerHTML =  `
                <td>${name}</td>
                <td>${email}</td>
                <td>${dob}</td>
                <td>${gender}</td>
                <td>${hobby}</td>
                <td>${country}</td>
                <td>${state}</td>
                <td>
                <a href='' class='btn btn-warning btn-sm edit'>Edit</a>
                <a href='' class='btn btn-danger btn-sm delete'>Delete</a>
                </td>
                `;
                list.appendChild(row);
                selectedRow = null;
                showAlert("Data Added", "success");
        }
        else{
            selectedRow.children[0].textContent = name;
            selectedRow.children[1].textContent = email;
            selectedRow.children[2].textContent = dob;
            selectedRow.children[3].textContent = gender;
            selectedRow.children[4].textContent = hobby;
            selectedRow.children[5].textContent = country;
            selectedRow.children[6].textContent = state;
            //selectedRow.children[7].textContent = city;
            selectedRow = null;
            showAlert("Data Edited","info");
       }
        clearFields();
     }
});

//edit data
document.querySelector(".form-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#name").value = selectedRow.children[0].textContent;
        document.querySelector("#email").value = selectedRow.children[1].textContent;
        document.querySelector("#dob").value = selectedRow.children[2].textContent;
        document.querySelector("#gender").value = selectedRow.children[3].textContent;
        document.querySelector("#hobby").value = selectedRow.children[4].textContent;
        document.querySelector("#country").value = selectedRow.children[5].textContent;
        document.querySelector("#state").value = selectedRow.children[6].textContent;
        //document.querySelector("#city").value = selectedRow.children[7].textContent;
    }
});

//delete data
document.querySelector(".form-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Data Deleted", "danger");
    }
});

// state
function populate(s1,s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
 
    s2.innerHTML ="";
    if(s1.value == "india"){
        var optionArray = ['gujarat|Gujarat', 'goa|Goa', 'kerala|Kerala'];
    }
    else if(s1.value == "usa"){
        var optionArray = ['texas|Texas', 'ohio|Ohio', 'alaska|Alaska'];
    }
    else if(s1.value == "canada"){
        var optionArray = ['nova scotia|Nova Scotia', 'nunavut|Nunavut', 'manitoba|Manitoba'];
    }
    for(var option in optionArray){
        var pair = optionArray[option].split("|");
        var newoption = document.createElement("option");

        newoption.value = pair[0];
        newoption.innerHTML=pair[1];
        s2.options.add(newoption);
      }
}

//city
