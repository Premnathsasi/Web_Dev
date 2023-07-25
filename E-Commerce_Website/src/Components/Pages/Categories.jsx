import React from 'react';
import {categories} from './data'
import CategoryItems from './CategoryItems';

const Categories = () => {
  return (
    <div className='category'>
        {categories.map((item) => (
            <CategoryItems key={item.id} item={item} />
        ))}
    </div>
  )
}

export default Categories