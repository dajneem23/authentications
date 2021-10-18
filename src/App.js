import './App.css';
import { BrowserRouter} from 'react-router-dom';
import PrivatePage from './privatepage'
import PublicPage from './publicpage'
import PrivateRouter from './PriviteRouter';
import PublicRouter from './PublicRouter';
// https://www.npmjs.com/package/react-use-googlelogin/v/0.4.1
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <PrivateRouter path="/private" component={PrivatePage} />                
          <PublicRouter path="/" component={PublicPage} />   
      </BrowserRouter>
    </div>
  );
}

export default App;


