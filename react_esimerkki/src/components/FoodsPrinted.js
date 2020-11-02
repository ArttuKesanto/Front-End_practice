import React from 'react';

function ObjektiTaulukkoMeals(props) { // Saa itse keksiä parametrin, mutta keksi / käytä props.
    return (
        <div> 
            { props.meals.map( meals1 => {
                return (
                 
                 <ul key = { meals1[1].idMeal }> { /* Käytetään ID:tä yksilöimään. */ }
                 <li>{ meals1[1].strMeal } </li>
                 
                 </ul>);
            })
        }
        </div>);  
};

export default ObjektiTaulukkoMeals;