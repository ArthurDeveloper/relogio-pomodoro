import { createContext } from 'react';

const Context = createContext({
    timer: null, setTimer: null,
    cycles: null, setCycles: null,
    restTime: null, setRestTime: null,
    longRestTime: null, setLongRestTime: null,
    inRest: null, setInRest: null,
    inLongRest: null, setInLongRest: null
});

export default Context;