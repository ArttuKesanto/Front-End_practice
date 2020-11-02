import React, { useEffect, useState } from 'react';
import ObjektiTaulukkoMeals from './FoodsPrinted';

function MealInformation() {
    const [mealInfo, setInfo] = useState('');
    const [virhe, setVirhe] = useState('Haetaan tietoja...');
    console.log(mealInfo);

    const fetchUrl = async () => {
try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken');
    const json = await response.json();
    // let index = 0; Never used this. Just return the whole JSON with meal-sections. 
        setVirhe('');
        
        // for (let i = 0; i < json.meals[0].strMeal.length; i++) {
        // for (let i = 0; i < json.meals[i].strMeal.length; i++) {
        // while (json.meals[index].strMeal.length > 0) {  MUISTA: Jos setataan tyhjään listaan, ei aaltosulkeita! Muuten objekti! Voidaan siirtää näin! (setInfo(json.meals))
        setInfo ( 
            {
                name: json.meals 
            } 
                );
        
        }
        catch (error) {
        setVirhe("Haku ei onnistunut. Kokeile uudestaan.");  
    } 
}

    useEffect( () => { fetchUrl() }, [] ); // Tarkastetaan muuttujan luonti.

if (virhe.length > 0) {
    return ( 
   <p>
       { virhe }
   </p>);
}

var list = [];

for (var i in mealInfo.name)
    list.push([i, mealInfo.name[i]])
console.log(mealInfo);
console.log(list)
//  const x = mealInfo.name[0];
   return (
    < ObjektiTaulukkoMeals meals = { list } />

   );

    //<div>
        //{list.map(function(d, idx) {  COULD just .map mealInfo.name? As the list? For future reference.
        //return (
        //<li key={idx}>{d.strMeal}</li>);
        //})}
        //</div>
    //);

        //return(
          //  <div>
            //<p>{mealInfo.name}</p>
            //</div>
};

export default MealInformation;