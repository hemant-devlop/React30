import React, { useState } from 'react'
import useDebounce from './useDebounce'

const Day12 = () => {
  const[searchItem,setSearchItem]=useState('')
  const getSearch=useDebounce(searchItem,1000);
  // an array of list
  const phoneList=['iphone','apple','sumsung','realme','xiomi','oppo','infinix','vivo','motorola','poco','iqoo','redmagic','nokia']
  const filterList=phoneList.filter(item=>item.toLowerCase().includes(getSearch))
  console.log(filterList)
  return (
    <div>
      <input type="text" placeholder='Search' onChange={e=>setSearchItem(e.target.value)} />
      <ul>
      {filterList.map((item,ind)=><li key={ind}>{item}</li>)}
      </ul>
    </div>
  )
}

export default Day12
