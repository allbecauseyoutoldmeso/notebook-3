function printElement() {
  var element = document.getElementById('app');
  console.log(element);
}

function changeText(id) {
  var element = document.getElementById(id)
  element.innerHTML = "Howdy!"
}
