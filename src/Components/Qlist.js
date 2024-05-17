import React, { useState } from 'react';
import Quesion from './Quesion';

const Qlist = () => {
  const [ask, setAsk] = useState(false);

  const handleOnClick = () => {
    setAsk(true);
  };

  const handleOnClose = () => {
    setAsk(false);
  };

  return (
    <div className='main-body'>
      <div className={`qlist ${ask ? 'blur' : ''}`}>
        <div className='latest-list'>
          <div className='latest-qlist'>
            <div className='latest'>
              <h2>
                LATEST <br />
                QUESTION
              </h2>
            </div>
            <div className='search'>
              <input type='search' placeholder='search' />
            </div>
          </div>
          <div>
            <frames></frames>
          </div>
          <div className='qlist-button'>
            <button type='submit' onClick={handleOnClick}>
              Ask
            </button>
          </div>
        </div>
        <div className='top-qlist'>
          <div className='topqlist-title'>
            <h3>
              Top <br />
              Questions
            </h3>
          </div>
          <div className='topqlist-border'></div>
        </div>
      </div>
      {ask && (
        <div className='question-overlay'>
          <Quesion onClose={handleOnClose} />
        </div>
      )}
    </div>
  );
};

export default Qlist;
