import React,{useState} from 'react'

const PureComponentCounter = () => {
    const [counter, setCounter] = useState(0);

    return (
      <>
    
      <div className='container'>
      <div className='text'>Pure Component </div>
      <div className='text1'>Click below button to increase count</div>
        <button onClick={() => setCounter((counter) => counter + 1)} className={'btn'}>
          Increase Counter
        </button>
        <p className='countervalue'>The counter value is: {counter} </p>
        <ul>
          <li>A React component is considered pure if it renders the same output for the same state and props.</li>
        </ul>
        </div>
      </>
    );
}

export default PureComponentCounter