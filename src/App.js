import { Routers } from './Router';
import Footer from './layout/Footer';
import Header from './layout/Header';
import { useLanguage } from './context/LanguageContext';
import { ToastContainer } from "react-toastify";


function App() {
  const { dir } = useLanguage(); 
  return (
    <div dir={dir}>
  <Header/>
  <Routers/>
  <ToastContainer/>
  <Footer/>
    </div>

  );
}

export default App;
