import React from 'react';
import Select from 'react-select';

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: "#121212", borderColor: "#dcb44a" }),
  dropdownIndicator: styles => ({ ...styles, color: "#dcb44a" }),
  indicatorSeparator: styles => ({ ...styles, backgroundColor: "#dcb44a"  }),
  multiValue:  styles => ({ ...styles, backgroundColor: "#dcb44a", borderColor: "#dcb44a", color: "#121212" }),
  menu: styles => ({ ...styles, backgroundColor: "#121212", color: "#dcb44a", borderColor: "#dcb44a" }),
   option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled  ? null : isSelected ? "#121212" : isFocused ? "#f1c876" : null,
      color: isDisabled ? '#ccc' : isSelected ? "#121212" : isFocused ? "#121212" : null,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? "red" : "#121212"),
      },
    };
  }
};


class InterestsForm extends React.Component {

  handleChange = (...args) => {
    this.props.addSelectedOption(this.props.name, ...args)
  }

  render() {
    
    return (
      <React.Fragment>
        <Select
          className="my-2"
          isMulti
          closeMenuOnSelect={false}
          value={this.props.selectedOption}
          options={this.props.options}
          onChange={this.handleChange}
          styles={colourStyles}
        />
      </React.Fragment>
      
    );
  }
}

export default InterestsForm;

