import Helmet from 'react-helmet';
import '../styles/App.css';
import Notifier from './Notifier';
import ClockProvider from './ClockProvider';
import Clock from './Clock';

export default function App() {

  return (
    <div className="App">

      <Helmet>
        <title>Relógio pomodoro</title>
        <meta name="keywords" content="pomodoro, relógio, estudos"/>
        <meta name="description" content="Um relógio para auxiliar no ciclo do pomodoro" />
      </Helmet>

      <div className="centered">
        <ClockProvider>
          <Clock />
        </ClockProvider>
      </div>
    </div>
  );
}
