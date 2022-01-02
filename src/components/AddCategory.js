import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {
    const [inputValue, seItnputValue] = useState('')

    const handreInputChange = (e) =>{
        seItnputValue(e.target.value);
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (inputValue.trim().length > 2){
            setCategories(cats => [inputValue,...cats]);
            seItnputValue('');
        }
        //console.log('Submit hecho')
        

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handreInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


