import React from 'react';

const Categories = ({filterItems}) => {
  return <div className='btn-container'>

  {/* all  */}
   <button 
    className='filter-btn' 
    onClick={() => filterItems('all')}
    >
      all
   </button>

    {/* breakfast */}
    <button 
    className='filter-btn' 
    onClick={() => filterItems('breakfast')}
    >
      breakfast
   </button>
 
    </div>;
};

export default Categories;
