import React,{useEffect, useState} from 'react'
import Quesion from './Quesion'

const Qlist = () => {
  const[ask,setAsk]=useState(false);

  const handleOnClick=()=>{
    setAsk(true);
  };

  const handleOnClose=()=>{
    setAsk(false);
  };  
  // useEffect(()=>{
  //   const handleOnClickOutside=(event)=>{
  //     if(ask&&!event.target.closest('.question-body')){
  //       setAsk(false);
  //     }
  //   };
  //   document.body.addEventListener('click',handleOnClickOutside);
  //   return()=>{
  //     document.body.removeEventListener('click',handleOnClickOutside);
  //   };
  // },[ask])
  return (
    <div className='main-body'>
        <div className='qlist'>
            <div className='latest-list'>
                <div className='latest-qlist'>
                  <div className='latest'>
                     <h2>LATEST <br/>QUESTION</h2>
                  </div>
                  <div className='search'>
                    <input type='search' placeholder='search'/>
                  </div>
                </div>
                <div></div>
                <div className='qlist-button'>
                    <button type='submit' onClick={handleOnClick}>Ask</button>
                </div>
                {ask&&(
                  <>
                    <Quesion onClose={handleOnClose}/>
                  </>
                  )}
            </div>
            <div className='top-qlist' >
                <div className='topqlist-title'>
                    <h3>Top <br/>Questions</h3>
                </div>
                <div className='topqlist-border'></div>
            </div>
        </div>
    </div>
  )
}

export default Qlist