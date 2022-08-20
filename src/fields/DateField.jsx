import * as Blockly from 'blockly/core';
import React from 'react';
import DatePicker from 'react-datepicker';

import BlocklyReactField from './BlocklyReactField';

import 'react-datepicker/dist/react-datepicker.css';

class ReactDateField extends BlocklyReactField {
  static fromJson(options) {
    return new ReactDateField(new Date(options['date']));
  }

  onDateSelected_ = (date) => {
    this.setValue(new Date(date));
    Blockly.DropDownDiv.hideIfOwner(this, true);
  };

  getText_() {
    return this.value_.toLocaleDateString();
  }

  fromXml(fieldElement) {
    this.setValue(new Date(fieldElement.textContent));
  }

  render() {
    return (
      <DatePicker
        selected={this.value_}
        onChange={this.onDateSelected_}
        inline
      />
    );
  }
}

Blockly.fieldRegistry.register('field_react_date', ReactDateField);

export default ReactDateField;
