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

  //listner with function to cross out an item from the list on double click
  li.on("dblclick",function crossOut() {
    li.toggleClass("strike");
  });

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