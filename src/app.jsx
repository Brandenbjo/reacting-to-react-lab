import React, { useEffect, useState } from 'react'
import Greet from './components/Greeter'



let App = () => {
    const [username, setUsername] = useState('')
    const [loaded, setLoaded] = useState(false)

    const userchange = (user) => {
        setUsername(user.target.value)
    }

    // const timer = () => setTimeout(() => {
    //     setLoaded(true);
    // }, 3000);


    // useEffect(() => {
    //     timer()
    // });


    useEffect(() => {
        const timer = setTimeout(() => { setLoaded(true); }, 3000);

        console.log(loaded)

        return () => { clearTimeout(timer); };

    }, [loaded]);


    if (loaded === false) {
        return (
            <div>
                <h1>Website loading ...</h1>
                <button onClick={() => { setLoaded(true); }}>LOAD</button>

            </div>
        );
    };

    return (
        <div>
            <Greet phrase='hey' name='john' />
            <Greet phrase='hi' name='phil' />
            <Greet phrase='hello' name='bill' />
            <input type="text" value={username} onChange={userchange} />
            <p>You are logging in as: {username} </p>
            <button onClick={() => { setLoaded(false); }}>LOAD</button>

        </div>
    );
};



export default App