import React, { useState } from 'react'

const Day13 = () => {
  //pagination
  const students=[
    {name:"hemant",roll:1},
    {name:"rahul",roll:2},
    {name:"trivedi",roll:3},
    {name:"ritik",roll:4},
    {name:"kunal",roll:5},
  ]
  const itemPerPage=1;
  const[currentPage,setCurrentPage]=useState(1);
  const currentPageLastIndex=currentPage*itemPerPage;
  const currentPageFirstIndex=currentPageLastIndex-itemPerPage;
  const currentPageItems=students.slice(currentPageFirstIndex,currentPageLastIndex)
  // console.log(currentPageItems)
  const pageNumbers=[]
  for(let i=1;i<=students.length;i++){
    pageNumbers.push(i)
  }

  return (
    <div>
      <ul>{
        currentPageItems.map((item,ind)=><li key={ind}>Name:{item.name}, Roll:{item.roll}</li>)
      }</ul>
      {pageNumbers.map(number=><span key={number} style={{margin:"0 10px", padding:'0 10px', cursor:'pointer' }} onClick={()=>setCurrentPage(number)}>{number}</span>)}
      
    </div>
  )
}

export default Day13
