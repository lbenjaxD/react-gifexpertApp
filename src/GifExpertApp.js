import React,{Fragment, useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['Star wars']);
    /* const handleAdd = () =>{
        setCategories([...categories,'Hola no c XD']);
    }
 */
    return ( 
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category => (
                         <GifGrid 
                         key = {category}
                         category = {category} 
                         />
                    ))
                }
            </ol>
        </>
     );
}
 
export default GifExpertApp;