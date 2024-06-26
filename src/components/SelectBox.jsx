import React, { useState, useRef, useEffect } from 'react';
import cs from 'classnames/bind';
import styles from '../styles/components/SelectBox.module.css';
import up from '../assets/up.svg'
import down from '../assets/down.svg'

const SelectBox = ({ data, placeholder, initialValue, onChange }) => {
    const cx = cs.bind(styles);

    const [selectedValue, setSelectedValue] = useState(initialValue || '');
    const [isOpen, setIsOpen] = useState(false);
    const selectBoxRef = useRef(null);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
        if (onChange) {
            onChange(value);
        }
    };

    const handleClickOutside = (event) => {
        if (selectBoxRef.current && !selectBoxRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={cx('main')} ref={selectBoxRef}>

            <div
                className={cx('select__box', 'T3')}
                onClick={handleToggleDropdown}
                style={{
                    color: selectedValue ? 'white' : '#9CA3AF',
                }}
            >
                <span>{selectedValue || placeholder}</span>
                <span>{isOpen ? <img src={down} alt="" /> : <img src={up} alt="" />} </span>
            </div>

            {isOpen && (
                <ul className={cx('ul__style')}>
                    {data.map((item, index) => (
                        <li
                            key={index}
                            className={cx('li__style', 'T3')}
                            onClick={() => handleSelectOption(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
};

export default SelectBox;
