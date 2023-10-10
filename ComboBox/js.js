function goToLink() {
  var dropdown = document.getElementById("myDropdown");
  var selectedValue = dropdown.value;
  
  if (selectedValue !== "") {
    window.location.href = selectedValue;
  }
}
