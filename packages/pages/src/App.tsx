import { useEffect, useState } from 'react';

export const App = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Greetings</h1>
            <p>Current time: {time.toLocaleTimeString()}</p>
            <p>Current date: {time.toLocaleDateString()}</p>
        </div>
    );
};