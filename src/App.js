// import Carousel from './component/Carousel';
// import DealsPage from './component/DealsPage';
// import LoginPage from './component/LoginPage';
// import Footer from './component/Footer';
import { BrowserRouter } from 'react-router-dom';
import Layout from './component/Layout';
// import NavigationBar from './component/NavigationBar';
// import Products from './component/Products';


function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
