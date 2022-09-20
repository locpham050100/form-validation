function Validator(formSelector) {
  var formRules = {};
  // lay ra form element trong DOM theo `formSelector`
  var formElement = document.querySelector(formSelector);
  // chi xu ly khi co element trong DOM
  if (formElement) {
    var inputs = formElement.querySelectorAll("[name][rules]");
    for (var input of inputs) {
        formRules[input.name] = input.getAttribute("rules")
    }
    console.log(formRules)
}
}
