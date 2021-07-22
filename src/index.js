import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import Notifier from './components/Notifier';

// Inicializando notificador
window.addEventListener('DOMContentLoaded', (async () => {
    try {
        alert('Aceite o envio de notificações para o relógio notificá-lo quando você precisar descançar ou voltar ao trabalho.');
        const initialized = await Notifier.init();
    } catch (Error) {
        
    }
}));

ReactDOM.render(
    <App />,
    document.getElementById('root')
) 