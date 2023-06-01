//add row in table when submit button is clicked
function addRow() {
    //get income and expense values from the form
    var income = document.getElementById("income").value;
    var expense = document.getElementById("expense").value;
    //get balance value from the form
    var balance = document.getElementById("balance").value;
    //calculate balance
    var balancetaken=document.getElementById("balance").innerHTML;
    //convert balance to number
    balancetaken = Number(balancetaken);
    var balance =income - expense+balancetaken;
    //display balance
    document.getElementById("balance").innerHTML = balance;

    //get table by id
    var table = document.getElementById("table");
    //insert row at the end of the table
    var row = table.insertRow(1);
    //insert cells in the row for income values and description
    var cell1 = row.insertCell(0);
    var cell3 = row.insertCell(1); 
    //insert cells in the row for expense values and description
    var cell2 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    //add values to the cells
    cell1.innerHTML = document.getElementById("income").value;
    cell2.innerHTML = document.getElementById("expense").value;
    //add description to the cells
    cell3.innerHTML = document.getElementById("income_desc").value;
    cell4.innerHTML = document.getElementById("expense_desc").value;
    //display table
    document.getElementById("table").style.display = "block";
    //display balance
    document.getElementById("balance").innerHTML = balance;
    console.log(balance);
    console.log(income);
    console.log(expense);
  reload();
}


