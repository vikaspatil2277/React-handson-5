import React,{useState} from 'react'
import HOCCounter from './HOCCounter'

const PureComponentCounter = () => {
    const [counter, setCounter] = useState(0);

    return (
      <>
      
        <div className='container1'>
        <div className='text'>HOC Component</div>
        <div className='text1'>Click below button to increase count</div>
        <button onClick={() => setCounter((counter) => counter + 1)} className={'btn'}>
          Increase Counter
        </button>
        
        <p className='countervalue'>The counter value is: {counter} </p>
        <ul>
          <li>A higher-order component is a function that takes a component and returns a new component.</li>
          <br/>
          <li>In HOC Example,created a counter component and added the functionality in counter component and returned it in another new component.Thus we can reuse the component logic.</li>
        </ul>
        </div>
      </>
    );
}

export default HOCCounter(PureComponentCounter)