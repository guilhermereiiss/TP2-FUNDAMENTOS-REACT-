import Header from "../07/components/Header/Header.jsx";
import Cartao from '../07/components/Card/Cartao.jsx';
import Footer from '../07/components/Footter/Footer.jsx';

export default function App() {
    return (
        <div className="app">
      <Header />
      <div className="content">
        <Cartao />
      </div>
      <Footer />
    </div>
    )
}