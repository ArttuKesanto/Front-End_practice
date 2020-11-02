import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Objecttable from './TietoTekniikkaTuotePrinted';

// Old version without a database can be found below!

/*{const table = [ // Hakasulut aloittavat taulukon.
    {
    id: 1,
    name: "3D 144Hz Display", 
    maker: "Philips", 
    date: "2020-02",
    type: "Display",
    description: "What a wonderful display! Enjoy the views!",
    kuva: 'http://myy.haaga-helia.fi/~marsi/pictures/tammi.PNG'
    },
    {
    id: 2,
    name: "Sony LG 244Hz", 
    maker: "Philips", 
    date: "2020-12",
    type: "Display, Low-tier",
    description: "Enjoy a fine picture quality with this item!",
    kuva: 'http://myy.haaga-helia.fi/~marsi/pictures/tammi.PNG'
    },
    {
    id: 3,
    name: "Logitech keyboard 299Xu", 
    maker: "Sony", 
    date: "2020-02",
    type: "Keyboard",
    description: "Fine typing with this hardware!",
    kuva: 'https://cdn.hswstatic.com/gif/76008099computerpictures.jpg'
    },
    {
    id: 4,
    name: "Logitech keyboard 299Xu", 
    maker: "Sony", 
    date: "2020-02",
    type: "Keyboard",
    description: "Fine typing with this hardware!",
    kuva: 'https://cdn.hswstatic.com/gif/76008099computerpictures.jpg'
    },
    {
    id: 6,
    name: "Logitech keyboard 299Xu", 
    maker: "Sony", 
    date: "2020-02",
    type: "Keyboard",
    description: "Fine typing with this hardware!",
    kuva: 'https://cdn.hswstatic.com/gif/76008099computerpictures.jpg'        
    },
    {
    id: 5,
    name: "Logitech keyboard 299Xu", 
    maker: "Sony", 
    date: "2020-02",
    type: "Keyboard",
    description: "Fine typing with this hardware!",
    kuva: 'https://cdn.hswstatic.com/gif/76008099computerpictures.jpg'
    }
    ]; } */

    const url = 'http://localhost:8080'; // Making it easier to search for files locally.

    function ItemInformation () {
        const [productTable, setTable] = useState([]);
        const [err, setErr] = useState('Searching for data...');
        const [additional, setAdditional] = useState('Wait a while...') // Additional information.

        const searchAllProducts = async () => { // async fetch, has to be.
            try {
              const response = await fetch(url + '/products/all');
              const json = await response.json();
              setTable(json);
              setErr('');
            } catch (error) {
              setTable([]);
              setErr('Could not find any data related to the search...');
              setAdditional('Figure out if the node server is running as intended...');
            }
           }
          
           useEffect( () => { // Starts the function and continues after fetch has been made.
             searchAllProducts();
           }, [])

           console.log(productTable); // For reference.
          
           if (err.length > 0) {
             return (
             <div>
                 <Typography>{ err } </Typography>;
                  <Typography> {additional} </Typography>;
            </div>
             )
           }
           if (productTable.length > 0) {
             return ( <Objecttable items = { productTable } searchAllProducts = {searchAllProducts} /> ); // Propsing function as well.
           }
           else {
           return ( <Typography>There are no products to be found.</Typography> );
           }
    };

export default ItemInformation;
// export default Objecttable;