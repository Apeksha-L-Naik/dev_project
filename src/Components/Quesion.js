import React from 'react'

const Quesion = () => {
  return (
    <>
    <div className='question-body'>
    <form action='post'>
    <div className='question'>
      <div className='question-title'>
        <h3>Ask question</h3>
      </div>
      <div className='question-input'>
        <input type='text' name='question' placeholder='Add a title under 20 words'/>
      </div>
      <div className='question-description'>
        <textarea type='text' name='description' placeholder='Add your description under 200-300 words'/>
      </div>
      <div className='question-post'>
        <button type='submit'>Post</button>
      </div>
    </div>
    </form>
    </div>
    </>
  )
}

export default Quesion