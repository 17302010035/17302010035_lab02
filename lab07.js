let columnNumber = document.getElementById("columnNumber");
let select = document.getElementById("input");
let formNode = document.getElementById("create");
let inputArray = document.getElementsByClassName("input");
let tableName = document.getElementById("tableName");
let commit = document.getElementById("commit");
let table = document.getElementsByTagName("table")[0];
let details = document.getElementById("details");
let selectTable = document.getElementById("second");
let tableObjectArray = [];
let warning = document.createElement("p");

let tableNumber = 0;
let rowNumber = 1;

function TableObject(name, array){
    this.name = name;
    this.array = array;
    this.getName = function(){
        return this.name;
    };
    this.getArray = function(){
      return this.array;
    }
}

let deleteArray = function(array, i){
    this.array =  array.splice(i,1);
    this.getArray  = function (){
        return this.array;
    }
};

let createInputForm = function () {
    let col = [];
    let columnNumberValue = columnNumber.value;
    let length = inputArray.length;
    if(length > 0){
        for(let j = 0; j < length; j++){
            select.removeChild(inputArray[0]);
        }
    }
    for(let i = 0;i< columnNumberValue; i++ ){
        let input = document.createElement("input");
        select.appendChild(input);
        input.classList.add("input");
        input.type = "text";
        input.placeholder = "Attribute";
    }
    if (tableName.value !=="" && columnNumber.value!==0 ){
        document.getElementById("commit").style.display = "inline";
    }
};

let createTable = function (i){
    table.innerHTML = "";
    for(let row = 0; row < tableObjectArray[i-1].getArray().length; row++){
        let tr = document.createElement("tr");
        table.appendChild(tr);
        for (let column = 0; column < tableObjectArray[i-1].getArray()[row].length;column++){
            if(row === 0){
                let th = document.createElement("th");
                tr.appendChild(th);
                th.innerHTML = tableObjectArray[i-1].getArray()[row][column];
                th.style.backgroundColor = "grey";
                th.style.color = "whitesmoke";
            }
            else {
                let td = document.createElement("td");
                tr.appendChild(td);
                td.innerHTML = tableObjectArray[i-1].getArray()[row][column];
                if (row%2 === 0){
                    td.style.backgroundColor = "lightgrey";
                }
            }
        }
    }
};

function addRow(){
    rowNumber++;
    tableObjectArray[selectTable.selectedIndex - 1].getArray()[rowNumber - 1] = [];
    for(let y = 0; y< inputArray.length; y++){
        tableObjectArray[selectTable.selectedIndex - 1].getArray()[rowNumber - 1][y] = inputArray[y].value;
    }
    createTable(selectTable.selectedIndex);
}

function choose(ev) {
    switch(ev.value){
        case "SELECT ONE" :
            warning.innerHTML = "";
            details.style.display = "none";
            select.style.display="none";
            commit.style.display = "none";
            if(document.getElementsByClassName("input").length > 0){
                for(let j = 0; j < inputArray.length; j++){
                    select.removeChild(document.getElementsByClassName("input")[0]);
                }
            }
            break;
        case "CREATE TABLE":
            warning.innerHTML = "";
            details.style.display = "inline";
            select.style.display="inline";
            columnNumber.onclick = function () {
                createInputForm();
            };
            commit.onclick=function () {
                tableNumber++;
                let tableContentArray = [];
                tableContentArray[rowNumber - 1] = [];
                for(let x = 0; x< inputArray.length; x++){
                    tableContentArray[rowNumber - 1][x] = inputArray[x].value;
                }
                let option = document.createElement("option");
                selectTable.appendChild(option);
                option.selected = true;
                option.innerHTML = tableName.value;
                option.classList.add("changeTable");
                tableObjectArray[tableNumber - 1] = new TableObject(tableName.value, tableContentArray);
                createTable(selectTable.selectedIndex);

            };
            break;
        case "ADD ROW":
            warning.innerHTML = "";
            select.style.display="inline";
            details.style.display = "none";
            if(inputArray.length > 0){
                for(let j = 0; j < inputArray.length; j++){
                    inputArray[j].value = "";
                }
            }
            columnNumber.onclick = function () {
                createInputForm();
            };
            commit.onclick=function () {
                addRow();
            };
            break;
        case "DELETE ROW":
            warning.innerHTML = "";
            select.style.display="inline";
            details.style.display = "none";
            if(inputArray.length > 0){
                for(let j = 0; j < inputArray.length; j++){
                    inputArray[j].value = "";
                }
            }
            commit.onclick = function () {
                for(let y = 1; y < tableObjectArray[selectTable.selectedIndex - 1].getArray().length; y++){
                    for(let z = 0; z < tableObjectArray[selectTable.selectedIndex - 1].getArray()[y].length; z++){
                        if(tableObjectArray[selectTable.selectedIndex - 1].getArray()[y][z] === inputArray[z].value){
                            tableObjectArray[selectTable.selectedIndex - 1].getArray().splice(y,1);
                            y--;
                            rowNumber--;
                            break;
                        }
                    }
                }
                createTable(selectTable.selectedIndex);
            };
            break;
        case "DELETE TABLE":
            select.style.display = "none";
            details.style.display = "none";
            formNode.appendChild(warning);
            warning.innerHTML = "WARNING: You cannot undo this action!";
            if(tableNumber > 0){
                let optionArray = document.getElementsByClassName("changeTable");
                commit.onclick = function () {
                    tableObjectArray.splice(selectTable.selectedIndex - 1, 1);
                    selectTable.options.remove(selectTable.selectedIndex);
                    tableNumber--;
                    selectTable.selectedIndex = 1;
                    createTable(selectTable.selectedIndex);
                };
            }
            break;
    }
}
function remove(){
    if ( tableName.value === ""|| columnNumber.value === 0 ){
        document.getElementById("commit").style.display = "none";
    }
}
