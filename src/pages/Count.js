import { useState } from 'react';

export default function Count() {
    const [count, setCount] = useState('');

    const addLaugh = (laugh) => {
        laugh[laugh.length -1] === 'h' ? setCount(laugh + 'a') : setCount(laugh + 'h');
    }

    const [enable, setEnable] = useState(true);
    const toggle = () => {
        setEnable(!enable);
    }

    return (
        <div>
            <p>laptrip yan bro {count}</p>
            <button onClick={() => addLaugh(count)}> Laugh </button>
            <button onClick={() => setCount(count.slice(0, -1))}> Undo Laugh </button>

            <br/>
            
            <button onClick={toggle}>{enable ? 'Hide' : 'Show'}</button>
            {enable && <p>Hello</p>}
        </div>
    );

}