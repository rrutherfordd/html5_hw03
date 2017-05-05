/*global $*/

var tableRow;

/* Helper functions */

/* http://stackoverflow.com/questions/4813219/testing-if-a-checkbox-is-checked-with-jquery */
$.fn.realVal = function () {
  'use strict';
  var $obj = $(this), val = $obj.val(), type = $obj.attr('type'), un_val = $obj.attr('data-unchecked');
  if (type && type === 'checkbox') {
    if (typeof un_val === 'undefined') {
      un_val = '';
      return $obj.prop('checked') ? val : un_val;
    }
  } else {
    return val;
  }
};
/* http://stackoverflow.com/questions/4813219/testing-if-a-checkbox-is-checked-with-jquery */

/* Main functions */

function buttonClicked() {
  'use strict';
  /* window.alert('Button clicked'); */
  window.console.log($('#buttonInput').val());
  tableRow = $('#buttonInputRow');
  tableRow.replaceWith('<tr id="buttonInputRow"><td>input type="button"</td><td><input type="button"></td><td>' + $('#buttonInput').val() + "</td></tr>");
}

function checkboxClicked() {
  'use strict';
  /* window.alert('Button clicked'); */
  window.console.log($('#checkboxInput').realVal());
  tableRow = $('#checkboxInputRow');
  tableRow.replaceWith('<tr id="checkboxInputRow"><td>input type="button"</td><td><input type="button"></td><td>' + $('#checkboxInput').realVal() + "</td></tr>");
}

function colorClicked() {
  'use strict';
  /* window.alert('Color clicked'); */
  window.console.log($('#colorInput').val());
  tableRow = $('#colorInputRow');
  tableRow.replaceWith('<tr id="colorInputRow"><td>input type="button"</td><td><input type="color"></td><td>' + $('#colorInput').val() + "</td></tr>");
}

/* TODO add other input types */

function textareaChanged() {
  'use strict';
  /* window.alert('Textarea changed'); */
  window.console.log($('#textareaInput').val());
  tableRow = $('#textareaInputRow');
  tableRow.replaceWith('<tr id="textareaInputRow"><td>textarea</td><td><textarea></textarea></td><td>' + $('#textareaInput').val() + "</td></tr>");
}

function selectChosen() {
  'use strict';
  /* window.alert('Select chosen'); */
  window.console.log($('#selectInput').val());
  tableRow = $('#selectInputRow');
  tableRow.replaceWith('<tr id="selectInputRow"><td>select</td><td><select></select></td><td>' + $('#selectInput').val() + "</td></tr>");
}

$('#buttonInput').on('click', buttonClicked);

$('#checkboxInput').on('click', checkboxClicked);

$('#colorInput').on('click change', colorClicked);

$('#textareaInput').on('change propertychange focusoff', textareaChanged);

$('#selectInput').on('change', selectChosen);