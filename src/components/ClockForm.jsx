import { useState, useContext } from 'react';
import ClockContext from './ClockContext';
import '../styles/ClockForm.css';

export default function ClockForm() {

    const { timer, setTimer, 
            cycles, setCycles,
            restTime, setRestTime,
            longRestTime, setLongRestTime,
            inRest, setInRest,
            active, setActive,
            inLongRest, setInLongRest } = useContext(ClockContext); 

    const onCyclesCountChange = (event) => {
        setCycles(event.target.value);
    };

    const onTimerChange = (event) => {
        setTimer(event.target.value);
    }

    const onRestTimeChange = (event) => {
        setRestTime(event.target.value);
    }

    const onLongRestTimeChange = (event) => {
        setLongRestTime(event.target.value);
    }

    const onSubmit = (event) => {
        setActive(true);
        event.preventDefault();
    }

    return (

        <form onSubmit={onSubmit}>

            <div>
                <label for="cycles-count">Ciclos: </label>
                    <input type="number" id="cycles-count" name="cycles-count" value={cycles}
                        onChange={onCyclesCountChange} />
            </div>
            
            <div>
                <label for="cycle-time">Tempo de ciclo: </label>
                    <input type="time" id="cycle-time" value={timer}
                        onChange={onTimerChange} />
            </div>

            <div>
                <label for="pause-time">Tempo de descanço: </label>
                    <input type="time" id="pause-time" value={restTime}
                        onChange={onRestTimeChange} />
            </div>

            <div>
                <label for="last-pause-time">Descanço final: </label>
                    <input type="time" id="last-pause-time" value={longRestTime}
                        onChange={onLongRestTimeChange} />
            </div>

            <div style={{flexBasis: "100%", height: "30px"}}>
                <button type="submit">Iniciar</button>
            </div>
        </form>
    )
} 