import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collections = () => {

  const {products} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  useEffect(()=>{
    setFilterProducts(products)
  },[])

  useEffect(()=> {
    applyFilter()
  },[category,subCategory])

  return (
    <div className='bg-[#0f0f0f] min-h-screen text-white px-4 md:px-10 py-10'>
  {/* Filters Panel */}
  <div className='mb-8'>
    <div 
      onClick={() => setShowFilter(!showFilter)} 
      className='flex items-center justify-between cursor-pointer mb-4 text-lg font-semibold'
    >
      <p>FILTERS</p>
      <img 
        className={`w-4 transition-transform duration-300 ${showFilter ? 'rotate-90' : ''}`} 
        src={assets.dropdown_icon} 
        alt="Dropdown" 
      />
    </div>

    <div className={`${showFilter ? 'block' : 'hidden'} grid md:grid-cols-2 gap-8 bg-[#1a1a1a] p-6 rounded-xl shadow-md`}>
      {/* Categories */}
      <div>
        <p className='text-green-400 font-medium mb-2'>CATEGORIES</p>
        {['Men', 'Women', 'Shoes'].map((item, idx) => (
          <label key={idx} className='block mb-2 cursor-pointer'>
            <input 
              className='mr-2 accent-green-500' 
              type="checkbox" 
              value={item} 
              onChange={toggleCategory} 
            /> {item}
          </label>
        ))}
      </div>

      {/* Sub-Categories */}
      <div>
        <p className='text-green-400 font-medium mb-2'>TYPE</p>
        {['Topwear', 'Bottomwear', 'Shoes'].map((item, idx) => (
          <label key={idx} className='block mb-2 cursor-pointer'>
            <input 
              className='mr-2 accent-green-500' 
              type="checkbox" 
              value={item} 
              onChange={toggleSubCategory} 
            /> {item}
          </label>
        ))}
      </div>
    </div>
  </div>

  {/* Title and Sort */}
  <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-6'>
    <Title text1='All' text2='COLLECTIONS' />
    <select className='bg-[#1a1a1a] text-white px-4 py-2 rounded-md border border-green-500 mt-4 md:mt-0'>
      <option value="relavant">Sort by: Relevant</option>
      <option value="low-high">Sort by: Low to High</option>
      <option value="high-low">Sort by: High to Low</option>
    </select>
  </div>

  {/* Product Grid */}
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
    {filterProducts.map((item, index) => (
      <ProductItem 
        key={index}
        name={item.name}
        id={item._id}
        price={item.price}
        image={item.image}
      />
    ))}
  </div>
</div>

  )
}

export default Collections;
