import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import keyboard from './images/keyboard-icon.png';
import setLanguage from '../../redux/actions';

const LanguageSwitcher = () => {
  const options = [
    { value: 'Русский', label: 'Русский', id: 'ru' },
    { value: 'English', label: 'English', id: 'en' },
  ];
  const dispatch = useDispatch();
  const handleChangeSelect = useCallback((evt) => {
    dispatch(setLanguage(evt.id));
  }, []);

  const customStyles = {
    container: () => ({
      minWidth: '150px',
      position: 'relative',
    }),
    menu: () => ({
      minWidth: '150px',
      position: 'absolute',
      top: '38px',
      left: '0',
    }),
    singleValue: () => ({
      marginLeft: '30px',
    }),
    control: (styles) => ({
      ...styles,
      minWidth: '150px',
      borderColor: '#993366',
      boxShadow: '0 0 0 1px #993366',
      backgroundImage: `url(${keyboard})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '8px center',
      cursor: 'pointer',
      ':hover': {
        borderColor: '#993366',
        boxShadow: '0 0 0 1px #993366',
        outlineColor: '993366',
      },
      ':focus': {
        borderColor: '#993366',
        boxShadow: '0 0 0 1px #993366',
        outlineColor: '993366',
      },
    }),
    option: (styles, { isSelected }) => {
      return {
        ...styles,
        backgroundColor: isSelected ? '#993366' : '#ffccff',
        color: isSelected ? 'white' : 'black',
        cursor: 'pointer',
        textAlign: 'center',

        ':active': {
          ...styles[':active'],
          backgroundColor: '#993366',
          color: 'white',
        },
      };
    },
  };
  return (
    <Select
      options={options}
      styles={customStyles}
      defaultValue={options[0]}
      onChange={handleChangeSelect}
    />
  );
};

export default LanguageSwitcher;
