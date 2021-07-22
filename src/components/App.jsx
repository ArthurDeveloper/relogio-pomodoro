import Helmet from 'react-helmet';
import '../styles/App.css';
import ClockProvider from './ClockProvider';
import Clock from './Clock';

export default function App() {

  return (
    <div className="App">

      <Helmet>
        <title>Relógio pomodoro</title>
      </Helmet>

      <div className="centered">
        <ClockProvider>
          <Clock />
        </ClockProvider>
      </div>
    </div>
  );
}
