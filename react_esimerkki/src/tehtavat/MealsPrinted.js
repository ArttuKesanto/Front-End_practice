import React from 'react';

function ObjektiTaulukkoMeals(props) { // Saa itse keksiä parametrin, mutta keksi / käytä props.
    return (
        <div> 
            { props.meals.map( meals1 => {
                return (
                 <p key = { meals1[1].idMeal }> { /* Käytetään ID:tä yksilöimään. */ }
                 { meals1[1].strMeal }
                 
                 </p>);
            })
        }
        </div>);  
};

export default ObjektiTaulukkoMeals;