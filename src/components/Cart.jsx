import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cart = () => {
    const [card, setCard] = useState([]);                   // Store all recipe cards
    const [selectedCards, setSelectedCards] = useState([]);  // Store selected recipes
    const [clickedCards, setClickedCards] = useState([]);    // Track clicked recipes
    const [cookingCards, setCookingCards] = useState([]); 
    
    // Store currently-cooking recipes
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCard(data));
    }, []);

    // Handle the "Want to cook" button click
    const handleAddToCook = (recipe) => {
        if (clickedCards.includes(recipe.recipe_id)) {
            alert('You clicked early!');  // Show alert if recipe was clicked before
        } else {
            setSelectedCards(prev => [...prev, recipe]);  // Add the recipe to the selected list
            setClickedCards(prev => [...prev, recipe.recipe_id]);  // Mark the recipe as clicked
        }
    };

    // Handle the "Preparing" button click to move to currently-cooking and remove from selected
    const handleStartCooking = (recipe) => {
        setCookingCards(prev => [...prev, recipe]);  // Add the recipe to currently-cooking
        setSelectedCards(prev => prev.filter(item => item.recipe_id !== recipe.recipe_id));  // Remove the recipe from selectedCards
    };

    const handleShowMore = () => {
        setVisibleCount(visibleCount + 6); // Increase the count by 20
      };

     

    // Calculate the total time and total calories for currently-cooking recipes
    const cookingTime = cookingCards.reduce((total, card) => total + parseInt(card.preparing_time), 0);
    const cookingCalories = cookingCards.reduce((total, card) => total + parseInt(card.calories), 0);

    return (
        <div id='recipe' className='max-w-screen-xl mx-auto'>
            <div className='md:flex-row flex flex-col justify-center'>
                {/* Recipe Cards */}
                <div className='lg:w-2/3 w-full p-2 mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        {card.slice(0, visibleCount).map((item, index) => (
                            <Card
                                key={index}
                                item={item}
                                handleAddToCook={handleAddToCook}
                            />
                        ))}
                    </div>

                    {visibleCount < card.length && (
            <div className="flex justify-center items-center mt-10">
              <button
                onClick={handleShowMore}
                className="px-6 py-2 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-700"
              >
                See More
              </button>
            </div>
          )}
                </div>

                {/* Right Sidebar */}
                <div className='lg:w-1/3 mx-auto'>
                    {/* Selected Recipes Section */}
                    <h2 className='text-black p-4 font-bold'>Selected Recipes</h2>
                    <p className='text-black px-4'>Total Selected: {selectedCards.length}</p>
                    <table className='w-full text-black'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedCards.map((card, index) => (
                                <tr key={index}>
                                    <td>{card.recipe_name}</td>
                                    <td>{card.preparing_time}</td>
                                    <td>{card.calories}</td>
                                    <td>
                                        <button
                                            onClick={() => handleStartCooking(card)}
                                            className='bg-green-500 text-black p-3 rounded-full font-bold text-lg'
                                        >
                                            Preparing
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    

                    {/* Currently Cooking Section (In Same Column) */}
                    <hr className='mt-6' />
                    <div id='currently-cooking' className='bg-gray-100 mt-8'>
                        <h2 className='text-black p-4 font-bold'>Currently Cooking : {cookingCards.length}</h2>
                        {cookingCards.length === 0 ? (
                            <p className='text-black px-4'>No recipes currently cooking.</p>
                        ) : (
                            <>
                                <table className='w-full text-black'>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Time</th>
                                            <th>Calories</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cookingCards.map((card, index) => (
                                            <tr key={index}>
                                                <td>{card.recipe_name}</td>
                                                <td>{card.preparing_time}</td>
                                                <td>{card.calories}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <hr className='mt-6' />

                                {/* Total Time and Calories for Currently Cooking Recipes */}
                                <div className="text-black p-4">
                                    <h3>Total Cooking Time: {cookingTime} minutes</h3>
                                    <h3>Total Cooking Calories: {cookingCalories} calories</h3>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
