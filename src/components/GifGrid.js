import React from 'react';
import { useFetchGifs} from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {
    
    const {data:images} = useFetchGifs(category);
    
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     getGifs(category)
    //         .then(imgs => setImages(imgs));
    // }, [category])
 
    

   

    return (
        <>
            <h3>{category}</h3>
            
             <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            { ...img }
                        />
                    ))
                }
            </div> 
            
        </>
    )
}
