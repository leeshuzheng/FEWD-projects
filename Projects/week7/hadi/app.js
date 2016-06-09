//
//
//- write function to append new list item to div (style it in CSS to match existing style)
//
//write function to update value of todos
//
//value of todo = 0
//
//.click(function() {
//
//}
//
//clear input fields - use <input type=“reset” value=“reset”/>

var todolist = $('#todos');
// <ul> todo
var addButton = $('#add');


addButton.click( function() {
    var listHolder = $('<li></li>')
    var userInput = $('#newItem').val();
    var todolist = $('#todos');
    listHolder.append(userInput);
    // <li> what the user types </li>
    todolist.append(listHolder);
    // <ul> <li>what the user types </li></ul>
})