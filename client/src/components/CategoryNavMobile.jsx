import React from 'react';
// icons 
import { FiX } from 'react-icons/fi';
// link
import { Link } from 'react-router-dom';
// useFetch hook
import useFetch from '../hooks/useFetch';

const CategoryNavMobile = ({setCatNavMobile}) => {
  // get categories
  const {data} = useFetch('/categories');
  // console.log(data[0].attributes.title); // dslr 

  return (
  <div className='w-full h-full bg-primary p-8'>
    <div
    onClick={()=> setCatNavMobile(false)}
    className='flex justify-end mb-8 cursor-pointer'>
      <FiX className='text-3xl '/>
    </div>
    {/* catNavMobile */}
    <div className='flex flex-col gap-y-6 items-center'>
      {data?.map(c=>{
        return (
        <Link to={`/products/${c.id}`} 
        key={c.id}
        className='w-full text-center cursor-pointer hover:shadow-xl hover:text-lg transition-all 
        uppercase font-semibold py-2'>
          {c.attributes.title}
        </Link>);
      })}
    </div>
  </div>);
};

export default CategoryNavMobile;
