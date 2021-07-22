import { useState } from 'react';
import Context from './ClockContext.jsx'

export default function ClockProvider({ children }) {

    const [timer, setTimer] = useState('00:00');

    const [cycles, setCycles] = useState(0);

    const [restTime, setRestTime] = useState('00:00');

    const [longRestTime, setLongRestTime] = useState('00:00');

    const [inRest, setInRest] = useState(true);

    const [active, setActive] = useState(false);

    const [inLongRest, setInLongRest] = useState(false);

    return (
        <Context.Provider value={{ 
                                    timer, setTimer, 
                                    cycles, setCycles, 
                                    restTime, setRestTime, 
                                    longRestTime, setLongRestTime,
                                    inRest, setInRest,
                                    active, setActive,
                                    inLongRest, setInLongRest
                                }}>
            {children}
        </Context.Provider>
    );
}