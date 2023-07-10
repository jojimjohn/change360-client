import React from 'react';
import Select from 'react-select';
import Typography from '@mui/material/Typography';

export default function DropdownList(props) {
  const handleChange = (selectedOption) => {
    props.getOption(selectedOption.value);
  };

  const options = props.useList.map((name) => ({
    value: name,
    label: name,
  }));

  // Custom styles for the dropdown
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.selectProps.menuIsOpen ? '#1f2937' : 'transparent',
      borderColor: state.selectProps.menuIsOpen ? '#4a5568' : '#cbd5e0',
      color: '#fff',
      width: '500px',
      boxShadow: state.selectProps.menuIsOpen ? '0 0 0 1px #4a5568' : 'none',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#2d3748' : state.isFocused ? '#4a5568' : 'transparent',
      color: state.isSelected ? '#fff' : '#cbd5e0',
      ':active': {
        backgroundColor: '#2d3748',
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#1f2937',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#fff',
    }),
  };

  return (
    <div>
      <Select
        options={options}
        placeholder={props.placeholder}
        onChange={handleChange}
        styles={customStyles} // Apply the custom styles
      />
      {props.error && (
        <Typography variant="caption" color="error">
          Please fill out this field
        </Typography>
      )}
    </div>
  );
}
