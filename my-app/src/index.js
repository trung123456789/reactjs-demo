import ReactDOM from 'react-dom';
import Root from './components/Root';
import store from './store/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(<Root store={store} />, document.getElementById('root'));