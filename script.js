var textbox1 = document.getElementById('t1');
var textbox2 = document.getElementById('t2');
var textbox3 = document.getElementById('t3');
var textbox4 = document.getElementById('t4');
var textbox5 = document.getElementById('t5');
var textbox6 = document.getElementById('t6');
var textbox7 = document.getElementById('t7');
var textbox8 = document.getElementById('t8');
var textbox9 = document.getElementById('t9');
var textbox10 = document.getElementById('t10');
var textbox11 = document.getElementById('t11');
var textbox12 = document.getElementById('t12');
var today = moment();

console.log(today.format("HH"))
$("#currentDay").text(today.format("dddd, MMMM Do"));

function timecheck(){
    for (i = 1; i<13; i++){
        if (i+8 < today.format("HH")) {
            document.getElementById("t"+i).style.backgroundColor = "grey";
            document.getElementById('c'+i).style.backgroundColor = "grey";
            document.getElementById('h'+i).style.backgroundColor = "grey";
    };
}};
timecheck(1)
function svaeList() {
    var todos = {
        textbox1: textbox1.value.trim(),
        textbox2: textbox2.value.trim(),
        textbox3: textbox3.value.trim(),
        textbox4: textbox4.value.trim(),
        textbox5: textbox5.value.trim(),
        textbox6: textbox6.value.trim(),
        textbox7: textbox7.value.trim(),
        textbox8: textbox8.value.trim(),
        textbox9: textbox9.value.trim(),
        textbox10: textbox10.value.trim(),
        textbox11: textbox11.value.trim(),
        textbox12: textbox12.value.trim()
    };
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(localStorage)
};
function renderLastTodo() {}
    var lastTodo = JSON.parse(localStorage.getItem("todos"));
    textbox1.placeholder = lastTodo.textbox1;
    textbox2.placeholder = lastTodo.textbox2;
    textbox3.placeholder = lastTodo.textbox3;
    textbox4.placeholder = lastTodo.textbox4;
    textbox5.placeholder = lastTodo.textbox5;
    textbox6.placeholder = lastTodo.textbox6;
    textbox7.placeholder = lastTodo.textbox7;
    textbox8.placeholder = lastTodo.textbox8;
    textbox9.placeholder = lastTodo.textbox9;
    textbox10.placeholder = lastTodo.textbox10;
    textbox11.placeholder = lastTodo.textbox11;
    textbox12.placeholder = lastTodo.textbox12;

for (i=1; i<13; i++){
    document.getElementById('b'+i).addEventListener("click", function(event){
        event.preventDefault();
        svaeList();
    })};

function init(){
    renderLastTodo();
    timecheck();
}

init();
