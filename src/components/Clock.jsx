import { useState, useEffect, useContext } from 'react';
import ClockContext from './ClockContext';
import ClockForm from './ClockForm';
import '../styles/Clock.css';
import Notifier from './Notifier';

export default function Clock() {

  const [intervalID, setIntervalID] = useState();

  const { timer, setTimer,
          cycles, setCycles,
          restTime, setRestTime,
          longRestTime, setLongRestTime,
          inRest, setInRest,
          active, setActive,
          inLongRest, setInLongRest} = useContext(ClockContext);

  const [currentTime, setCurrentTime] = useState(timer); 

  const [currentRestTime, setCurrentRestTime] = useState(restTime); 

  const [currentLongRestTime, setCurrentLongRestTime] = useState(longRestTime); 

  let [minutes, seconds] = currentTime.split(':');

  let [restMinutes, restSeconds] = currentRestTime.split(':');

  let [longRestMinutes, longRestSeconds] = currentLongRestTime.split(':');


  // Inicializando notificador
  (async () => {
    try {
      const initialized = await Notifier.init();
    } catch (Error) {

    }
  })();


  useEffect(() => {
    setCurrentTime(timer);
  }, [timer]);

  useEffect(() => {
    setCurrentRestTime(restTime);
  }, [restTime]);

  useEffect(() => {
    setCurrentLongRestTime(longRestTime);
  }, [longRestTime]);

  useEffect(() => {
    setInRest(false);
  }, [active]);

  useEffect(() => {
    if (active) {
      if (!inRest && !inLongRest) {
        setIntervalID(window.setInterval(() => {

          [minutes, seconds] = [parseInt(minutes), parseInt(seconds)];

          seconds--;

          if (seconds.toString() === '-1') {
            minutes--;
            seconds = 59;
          }

          if (minutes.toString().length < 2) {
            minutes = '0' + minutes;
          }

          if (seconds.toString().length < 2) {
            seconds = '0' + seconds;
          }

          setCurrentTime(`${minutes}:${seconds}`);
        }, 1000));
        
      } else if (inRest) {
        setIntervalID(window.setInterval(() => {

          // alert(`${minutes}:${seconds}`);

          [restMinutes, restSeconds] = [parseInt(restMinutes), parseInt(restSeconds)];

          // alert(`${minutes}:${seconds}`);

          restSeconds--;

          if (restSeconds.toString() === '-1') {
            restMinutes--;
            restSeconds = 59;
          }

          if (restMinutes.toString().length < 2) {
            restMinutes = '0' + restMinutes;
          }

          if (restSeconds.toString().length < 2) {
            restSeconds = '0' + restSeconds;
          }

          setCurrentRestTime(`${restMinutes}:${restSeconds}`);
        }, 1000));
      }
    }
  }, [active, inRest]);


  useEffect(() => {
    if (inLongRest) {
      setIntervalID(window.setInterval(() => {

        [longRestMinutes, longRestSeconds] = [parseInt(longRestMinutes), 
                                              parseInt(longRestSeconds)];

        longRestSeconds--;

        if (longRestSeconds.toString() === '-1') {
          longRestMinutes--;
          longRestSeconds = 59;
        }

        if (longRestMinutes.toString().length < 2) {
          longRestMinutes = '0' + longRestMinutes;
        }

        if (longRestSeconds.toString().length < 2) {
          longRestSeconds = '0' + longRestSeconds;
        }

        setCurrentLongRestTime(`${longRestMinutes}:${longRestSeconds}`);
      }, 1000));
    }
  }, [inLongRest]);

  useEffect(() => {
    if (minutes == '-1') {
      Notifier.notify({title: 'Hora do descanço!',
                       body: `Você terá ${restTime} minutos de descanço antes de voltar ao trabalho.`,
                       icon: null});
      clearInterval(intervalID);
      setInRest(!inRest);
    }
  }, [minutes]);

  useEffect(() => {
    if (restMinutes == '-1') {
      clearInterval(intervalID);
      setCycles(cycles-1);
      if (cycles == 1) {
        setInRest(false);
        setInLongRest(true);
        Notifier.notify({title: 'Fim dos ciclos!',
                         body: `Você completou todos os ciclos e pode descançar por `+
                               `${longRestTime} minutos antes de começar novamente.`,
                         icon: null});
        return;
      }
      Notifier.notify({title: 'Hora de trabalhar!',
                       body: `O seu descanço terminou. Hora de voltar ao trabalho!.`,
                       icon: null});
      setCurrentTime(timer);
      setCurrentRestTime(restTime);
      setInRest(!inRest);
    }
  }, [restMinutes]);

  useEffect(() => {
    if (longRestMinutes == '-1') {
      clearInterval(intervalID);
      Notifier.notify({title: 'Pomodoro finalizado!',
                       body: `O descanço final terminou. Você pode reiniciar o pomodoro se quiser.`,
                       icon: null});
      setActive(false);
      setInRest(false);
      setInLongRest(false);
      setCycles(0);
      setTimer('00:00');
      setRestTime('00:00');
      setLongRestTime('00:00');
      setInRest(false);
    }
  }, [longRestMinutes]);


  return (
    <div id="clock-settings">
      <h1 id="clock-title">Relógio pomodoro</h1>
      <h3 id="clock-how-to-use-advice">Digite um tempo em minutos para o relógio tocar um alarme.</h3>
      
      <ClockForm />

      <div id="clock-container">
        <div id="clock">
          {inRest ? currentRestTime : (inLongRest ? currentLongRestTime : currentTime)}
        </div>
      </div>
    </div>
  );
  
}
