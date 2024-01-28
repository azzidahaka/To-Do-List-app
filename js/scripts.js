/**
 * function adds a new item to the list.
 * creates list element.
 * gets the value of the input field and append to the list.
 * if the input field is empty, alert the user.
 * else, append the list to the list.
 */
function newItem() {
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    let list = $('#list');
    list.append(li);
    $('#input').val('');
  }

  //function to cross out an item from the list
  function crossOut() {
    li.toggle("strike");
  }

  li.on("dblclick", crossOut);
  
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);
  crossOutButton.on("click", deleteListItem);
  function deleteListItem(){
    li.addClass("delete");
  }

  //calls jquery ui sortable function
  $('#list').sortable();
}