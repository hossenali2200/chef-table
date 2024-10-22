import React from 'react'
import { PiClock } from "react-icons/pi";
import { SlFire } from "react-icons/sl";

const Card = ({item,index,handleAddToCook  }) => {
  return (
    <div key={index}>
    <a className="p-8 max-w-lg border h-[600px] border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center" href="#">
<img src={item.recipe_image} className="shadow w-[400px] h-[200px] rounded-lg overflow-hidden border" />
<div className="mt-8">
  <h4 className="font-bold text-xl"> {item.recipe_name}</h4>
  <p className="mt-2 text-gray-600">{item.short_description}
  </p>
  <hr className='mt-6' />
  <div>
    <h2 className='text-lg font-semibold mb-2'>Ingredients: {item.ingredients.length}</h2>
    <ol>
    {item.ingredients.map((ingredient, index) => (
        <li className='dot text-gray-600' key={index}>{ingredient}</li>
))}
    </ol>
  </div>

  <hr className='mt-6' />
  <div className='mt-3 flex gap-4'>
    <div className='flex gap-2 text-center'>
         <PiClock className='mt-1' />
         <h2>{item.preparing_time}</h2>
    </div>
    <div className='flex gap-2 text-center'>
    <SlFire className='mt-1' />
    <h2>{item.calories}</h2>
    </div>
  </div>
  <div className="mt-5">
    <button  onClick={() => handleAddToCook(item)} type="button" className="inline-flex items-center rounded-full border border-transparent bg-green-500 px-6 py-4 text-lg font-semibold leading-4 text-black shadow-sm hover:bg-gray-900">Want to cook</button>
  </div>
</div>
</a>
</div>
  )
}

export default Card