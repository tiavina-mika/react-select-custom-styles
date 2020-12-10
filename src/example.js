import React from 'react';

import Select from 'react-select';
import { colourOptions } from './docs/data';

const customStyles = {
	container: (provided) => ({
		...provided,
		width: '100%',
    marginTop: 10,
	}),
	control: (provided, state) => {
		const {selectProps: { width, fullWidth }, isFocused } = state
		return {
			...provided,
			width: fullWidth ? '100%' : width,
			outline: isFocused ? '1px solid #fff' : 'none',
			border:  'none',
			borderRadius: 0,
      borderBottom: '1px solid #949494',
      ':hover': {
        outline: '1px solid #fff',
        borderBottom: '1px solid #949494',
      }
		}
	},
	menu: () => ({
    zIndex: 100,
	}),
	option: (provided, state) => ({
		...provided,
		// borderBottom: '1px solid rgba(148, 148, 148, 0.5)',
		color: state.isSelected ? 'red' : 'blue',
		padding: '10px 20px',
    width: '100%',
	}),
	singleValue: (provided, state) => {
	  const opacity = state.isDisabled ? 0.5 : 1;
	  const transition = 'opacity 300ms';
  
	  return { ...provided, opacity, transition };
  },
  multiValue: (styles) => {
    return {
      ...styles,
      padding: '3px 5px 3px 8px',
      fontSize: 18,
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    marginLeft: 8,
    ':hover': {
      opacity: 0.5,
      cursor: 'pointer',
    },
  }),
}
export default () => (
  <Select
    defaultValue={[colourOptions[2], colourOptions[3]]}
    isMulti
    name="colors"
    options={colourOptions}
    styles={customStyles}
  />
);
